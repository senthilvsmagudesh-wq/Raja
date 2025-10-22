export const clinicInfo = {
  name: "RAJA Health Care Clinic",
  tagline: "Compassionate Neurology Care in Salem",
  phone: "076959 91173",
  email: "info@rajahealthcare.com",
  address: "Arisipalayam, Salem, Tamil Nadu",
  fullAddress: "123 Neurology Street, Arisipalayam, Salem, Tamil Nadu 636001",
  workingHours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
    saturday: "Saturday: 9:00 AM - 1:00 PM",
    sunday: "Sunday: Closed"
  },
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.123456789!2d78.123456!3d11.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM5JzE1LjYiTiA3OMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
};

export const doctorInfo = {
  name: "Dr. Raja",
  fullName: "Dr. Raja Kumar",
  image: "https://customer-assets.emergentagent.com/job_raja-neuro-care/artifacts/s29aqurj_image.png",
  qualifications: "MBBS, MD (General Medicine), DM (Neurology)",
  institution: "AIIMS Delhi",
  experience: "15 years",
  specializations: [
    "Stroke Management",
    "Epilepsy",
    "Parkinson's Disease",
    "Migraine & Headache Disorders",
    "Neuromuscular Disorders"
  ],
  bio: "Dr. Raja completed his DM in Neurology from AIIMS Delhi, one of India's premier medical institutions. With over 15 years of experience in clinical neurology, he has developed expertise in managing complex neurological conditions with a patient-centered approach. His special focus on stroke management and movement disorders has helped countless patients regain their quality of life.",
  personalNote: "When not at the clinic, Dr. Raja volunteers for community health awareness programs and participates in medical camps to make neurology care accessible to underserved communities.",
  associations: [
    "Indian Academy of Neurology (IAN)",
    "Movement Disorder Society of India",
    "Indian Stroke Association"
  ]
};

export const staff = [
  {
    id: 1,
    name: "Ms. Priya Sharma",
    role: "Clinic Manager",
    experience: "10 years",
    description: "Ensures smooth clinic operations and exceptional patient care coordination."
  },
  {
    id: 2,
    name: "Mr. Rahul Singh",
    role: "Neurological Technician",
    experience: "8 years",
    specialization: "EEG, EMG/NCS",
    description: "Specialized in conducting neurological diagnostic tests with precision and care."
  },
  {
    id: 3,
    name: "Ms. Anjali Devi",
    role: "Patient Coordinator",
    experience: "5 years",
    description: "Your first point of contact for appointments and patient assistance."
  }
];

export const services = [
  {
    id: 1,
    category: "Neurological Conditions Treated",
    items: [
      {
        name: "Stroke Management",
        description: "Comprehensive acute stroke care, rehabilitation planning, and prevention strategies for optimal recovery."
      },
      {
        name: "Epilepsy",
        description: "Diagnosis, medication management, and long-term monitoring for seizure disorders in all age groups."
      },
      {
        name: "Parkinson's Disease",
        description: "Expert management of movement disorders with medication optimization and lifestyle counseling."
      },
      {
        name: "Migraine & Headaches",
        description: "Specialized treatment for chronic migraines, tension headaches, and other headache disorders."
      },
      {
        name: "Multiple Sclerosis",
        description: "Comprehensive care for MS patients including disease-modifying therapies and symptom management."
      },
      {
        name: "Dementia & Memory Disorders",
        description: "Early diagnosis and management of Alzheimer's disease and other cognitive disorders."
      },
      {
        name: "Neuropathy",
        description: "Treatment for peripheral nerve disorders, diabetic neuropathy, and nerve pain management."
      }
    ]
  },
  {
    id: 2,
    category: "Diagnostic Services",
    items: [
      {
        name: "EEG (Electroencephalography)",
        description: "Brain wave monitoring for epilepsy diagnosis, sleep disorders, and brain function assessment."
      },
      {
        name: "EMG/NCS (Electromyography/Nerve Conduction Studies)",
        description: "Detailed nerve and muscle testing for neuropathy, muscle disorders, and nerve injuries."
      },
      {
        name: "VEP (Visual Evoked Potentials)",
        description: "Visual pathway testing for optic nerve disorders and multiple sclerosis diagnosis."
      },
      {
        name: "BERA (Brainstem Evoked Response Audiometry)",
        description: "Hearing pathway assessment and brainstem function evaluation."
      }
    ]
  },
  {
    id: 3,
    category: "Specialized Treatments",
    items: [
      {
        name: "Botox for Chronic Migraine",
        description: "FDA-approved treatment for patients with chronic migraine occurring 15 or more days per month."
      },
      {
        name: "Spasticity Management",
        description: "Comprehensive care for muscle stiffness following stroke, spinal cord injury, or cerebral palsy."
      },
      {
        name: "Deep Brain Stimulation (DBS) Counseling",
        description: "Expert guidance for advanced Parkinson's disease and movement disorder patients considering DBS."
      }
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    condition: "Stroke Recovery",
    text: "Dr. Raja's timely intervention and comprehensive treatment plan helped me recover significantly after my stroke. The staff is caring and professional.",
    rating: 5
  },
  {
    id: 2,
    name: "Lakshmi Devi",
    condition: "Migraine Treatment",
    text: "After years of suffering from chronic migraines, Dr. Raja's treatment has given me my life back. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Venkatesh S.",
    condition: "Parkinson's Management",
    text: "The compassionate care and expert management of my Parkinson's disease has made a tremendous difference. Thank you, Dr. Raja!",
    rating: 5
  }
];

export const faqs = [
  {
    id: 1,
    question: "Do I need a referral to visit the clinic?",
    answer: "No referral is necessary. You can directly book an appointment by calling us or visiting the clinic."
  },
  {
    id: 2,
    question: "What should I bring for my first visit?",
    answer: "Please bring any previous medical records, current medications list, recent test results, and your insurance card if applicable."
  },
  {
    id: 3,
    question: "How long is the typical wait time?",
    answer: "We value your time. With scheduled appointments, waiting time is typically 10-15 minutes. Emergency cases are prioritized."
  },
  {
    id: 4,
    question: "Is parking available?",
    answer: "Yes, we have dedicated parking facilities for patients right in front of the clinic."
  },
  {
    id: 5,
    question: "Do you accept insurance?",
    answer: "Yes, we accept all major insurance providers. Please bring your insurance card during your visit."
  },
  {
    id: 6,
    question: "What are the consultation charges?",
    answer: "Please contact us at 076959 91173 for information about consultation fees and insurance coverage."
  }
];

export const updates = [
  {
    id: 1,
    title: "Free Neurology Health Camp",
    date: "First Saturday of Every Month",
    description: "Join our monthly free health screening camp. Basic neurological examination, blood pressure check, and health counseling available at no cost.",
    type: "event"
  },
  {
    id: 2,
    title: "World Stroke Day Awareness",
    date: "October 29, 2024",
    description: "Learn about stroke prevention, recognize warning signs, and understand the importance of timely treatment. Free consultation for stroke risk assessment.",
    type: "awareness"
  },
  {
    id: 3,
    title: "Understanding Epilepsy",
    description: "Epilepsy is a neurological condition that can affect anyone. Early diagnosis and proper medication can help most patients lead normal lives. Schedule a consultation if you or a loved one experiences recurrent seizures.",
    type: "health-tip"
  }
];
