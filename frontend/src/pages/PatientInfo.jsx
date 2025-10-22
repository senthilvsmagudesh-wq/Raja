import React from 'react';
import { FileText, HelpCircle, CreditCard, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { faqs } from '../mock';

const PatientInfo = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Patient Information
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know for your visit
            </p>
          </div>
        </div>
      </section>

      {/* First Visit Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                First-Time Visitor Guide
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">What to Bring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Valid photo ID (Aadhaar Card, Driver's License, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Insurance card (if applicable)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>List of current medications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Previous medical records and test results</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>List of allergies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Referral letter (if you have one)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-cyan-100">
                <CardHeader>
                  <CardTitle className="text-xl text-cyan-900">What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-cyan-600 mr-2">✓</span>
                      <span>Registration and paperwork (10-15 minutes)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-600 mr-2">✓</span>
                      <span>Detailed medical history discussion</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-600 mr-2">✓</span>
                      <span>Comprehensive neurological examination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-600 mr-2">✓</span>
                      <span>Discussion of symptoms and concerns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-600 mr-2">✓</span>
                      <span>Diagnostic tests if required</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-600 mr-2">✓</span>
                      <span>Treatment plan and next steps</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Instructions */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-cyan-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Booking Your Appointment
              </h2>
            </div>

            <Card className="border-blue-100">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Book</h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="flex items-start">
                        <span className="font-semibold text-blue-600 mr-2">1.</span>
                        <span><strong>Call us:</strong> Phone 076959 91173 during working hours</span>
                      </p>
                      <p className="flex items-start">
                        <span className="font-semibold text-blue-600 mr-2">2.</span>
                        <span><strong>Walk-in:</strong> Visit the clinic directly (subject to availability)</span>
                      </p>
                      <p className="flex items-start">
                        <span className="font-semibold text-blue-600 mr-2">3.</span>
                        <span><strong>WhatsApp:</strong> Send a message to our clinic number</span>
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Appointment Types</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-semibold text-blue-900 mb-1">Regular Consultation</p>
                        <p className="text-sm text-gray-600">For non-urgent neurological concerns</p>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="font-semibold text-red-900 mb-1">Emergency Cases</p>
                        <p className="text-sm text-gray-600">Immediate attention for urgent symptoms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CreditCard className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Insurance & Payment
              </h2>
            </div>

            <Card className="border-green-100">
              <CardContent className="p-8">
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong className="text-green-600">Insurance:</strong> We accept all major insurance providers. 
                    Please bring your insurance card to your appointment. Our staff will help you with claim procedures.
                  </p>
                  <p>
                    <strong className="text-green-600">Payment Methods:</strong> We accept cash, credit/debit cards, 
                    UPI payments, and digital wallets for your convenience.
                  </p>
                  <p>
                    <strong className="text-green-600">Billing:</strong> You will receive a detailed bill at the end 
                    of your visit. For insurance patients, we will process claims on your behalf.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    For specific questions about consultation fees or insurance coverage, please call us at 076959 91173.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <HelpCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <Card className="border-blue-200">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq) => (
                    <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientInfo;
