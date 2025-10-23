from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: str
    subject: str
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj


# Contact endpoint: store message and send email notification
@api_router.post("/contact")
async def submit_contact(form: ContactForm):
    # Persist to MongoDB (without _id exposure)
    try:
        doc = form.model_dump()
        doc["timestamp"] = datetime.now(timezone.utc).isoformat()
        await db.contact_messages.insert_one(doc)
    except Exception as e:
        logger.exception("Failed to save contact message")
        raise HTTPException(status_code=500, detail="Failed to save message")

    # Send email notification if SMTP configured
    smtp_host = os.environ.get("SMTP_HOST")
    smtp_port = int(os.environ.get("SMTP_PORT", "0"))
    smtp_user = os.environ.get("SMTP_USER")
    smtp_pass = os.environ.get("SMTP_PASS")
    recipient = os.environ.get("CONTACT_RECIPIENT")

    if smtp_host and smtp_port and smtp_user and smtp_pass and recipient:
        try:
            msg = MIMEMultipart()
            msg["From"] = smtp_user
            msg["To"] = recipient
            msg["Subject"] = f"Website contact: {form.subject}"

            body = f"Name: {form.name}\nEmail: {form.email}\nPhone: {form.phone}\n\nMessage:\n{form.message}"
            msg.attach(MIMEText(body, "plain"))

            # Use SMTP with TLS when possible
            server = smtplib.SMTP(smtp_host, smtp_port, timeout=10)
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.sendmail(smtp_user, [recipient], msg.as_string())
            server.quit()
            logger.info("Contact email sent to %s", recipient)
        except Exception:
            logger.exception("Failed to send contact email")
            # Don't fail the whole request if email can't be sent

    else:
        # Development fallback: write the email body to a local log file so developers
        # can inspect the email contents without configuring SMTP.
        try:
            logs_dir = ROOT_DIR / "logs"
            logs_dir.mkdir(parents=True, exist_ok=True)
            log_file = logs_dir / "contact-emails.txt"
            body = f"Name: {form.name}\nEmail: {form.email}\nPhone: {form.phone}\nSubject: {form.subject}\nMessage:\n{form.message}\n---\n"
            with log_file.open("a", encoding="utf8") as fh:
                fh.write(f"[{datetime.now(timezone.utc).isoformat()}]\n")
                fh.write(body)
            logger.info("SMTP not configured; wrote contact message to %s", str(log_file))
        except Exception:
            logger.exception("Failed to write contact message to local log file")

    return {"status": "ok"}

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()