import { z } from "zod";

// Appointment Booking Schema
export const appointmentSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  preferredDate: z.string().min(1, "Please select a date"),
  preferredTime: z.enum(["morning", "afternoon", "evening"], {
    required_error: "Please select a preferred time",
  }),
  service: z.string().min(1, "Please select a service"),
  reason: z.string().optional(),
});

export type Appointment = z.infer<typeof appointmentSchema>;

// Contact Form Schema
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type Contact = z.infer<typeof contactSchema>;

// Services data
export const servicesData = [
  {
    id: "stroke-management",
    title: "Stroke Management",
    description: "Comprehensive care for stroke patients, from initial diagnosis to rehabilitation.",
    icon: "activity",
  },
  {
    id: "epilepsy",
    title: "Epilepsy and Seizure Disorders",
    description: "Personalized treatment plans to manage and control seizures.",
    icon: "zap",
  },
  {
    id: "headache",
    title: "Headache and Migraine Clinic",
    description: "Advanced diagnostics and treatment for all types of headaches.",
    icon: "alert-circle",
  },
  {
    id: "movement-disorders",
    title: "Movement Disorders",
    description: "Expert care for conditions like Parkinson's disease, tremors, and dystonia.",
    icon: "move",
  },
  {
    id: "neuromuscular",
    title: "Neuromuscular Disorders",
    description: "Diagnosis and treatment of conditions affecting the nerves and muscles.",
    icon: "activity",
  },
  {
    id: "dementia",
    title: "Dementia and Memory Care",
    description: "Compassionate care for patients with Alzheimer's disease and other forms of dementia.",
    icon: "brain",
  },
  {
    id: "sleep-disorders",
    title: "Sleep Disorders",
    description: "Diagnosis and treatment of sleep-related neurological conditions.",
    icon: "moon",
  },
  {
    id: "pediatric",
    title: "Pediatric Neurology",
    description: "Specialized care for children with neurological disorders.",
    icon: "baby",
  },
  {
    id: "neuro-oncology",
    title: "Neuro-Oncology",
    description: "Treatment of tumors of the brain and spinal cord.",
    icon: "shield",
  },
  {
    id: "pain-management",
    title: "Pain Management",
    description: "Comprehensive approach to managing chronic neurological pain.",
    icon: "heart-pulse",
  },
] as const;
