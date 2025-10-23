from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import requests


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

class AppointmentForm(BaseModel):
    name: str
    email: Optional[str] = None
    phone: str
    preferredDate: str
    preferredTime: str
    department: str
    reason: Optional[str] = None

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


# Appointment booking endpoint
@api_router.post("/book-appointment")
async def book_appointment(form: AppointmentForm):
    try:
        # Save appointment to MongoDB
        doc = form.model_dump()
        doc["timestamp"] = datetime.now(timezone.utc).isoformat()
        doc["status"] = "pending"  # pending, confirmed, cancelled
        await db.appointments.insert_one(doc)
        
        # Send email using Resend API
        resend_api_key = "re_ethH6kzz_DqKLnTE4GvLC2vYxF2DTm2K6"
        resend_url = "https://api.resend.com/v1/email/send"
        
        # Format the email content with HTML for better presentation
        email_content = f"""
        <h2>New Appointment Request</h2>
        <p><strong>Patient Name:</strong> {form.name}</p>
        <p><strong>Phone:</strong> {form.phone}</p>
        <p><strong>Email:</strong> {form.email if form.email else 'Not provided'}</p>
        <p><strong>Department:</strong> {form.department}</p>
        <p><strong>Preferred Date:</strong> {form.preferredDate}</p>
        <p><strong>Preferred Time:</strong> {form.preferredTime}</p>
        <p><strong>Reason for Visit:</strong> {form.reason if form.reason else 'Not specified'}</p>
        """

        email_data = {
            "from": "RAJA Health Care <onboarding@resend.dev>",
            "to": ["senthilvsmagudesh@gmail.com"],  # Replace with your Gmail
            "subject": f"New Appointment Request - {form.name}",
            "html": email_content
        }

        headers = {
            "Authorization": f"Bearer {resend_api_key}",
            "Content-Type": "application/json"
        }

        response = requests.post(resend_url, json=email_data, headers=headers)
        
        if response.status_code != 200:
            logger.error(f"Failed to send email: {response.text}")
            # Don't raise exception, still return success if appointment was saved
        
        return {
            "status": "success",
            "message": "Appointment request received successfully"
        }
        
    except Exception as e:
        logger.exception("Failed to process appointment request")
        raise HTTPException(status_code=500, detail="Failed to process appointment request")

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