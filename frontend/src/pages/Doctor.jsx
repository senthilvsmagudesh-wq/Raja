import React from 'react';
import { Award, GraduationCap, Heart, Briefcase, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { doctorInfo } from '../mock';

const Doctor = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the Doctor
            </h1>
            <p className="text-xl text-gray-600">
              Expert neurological care from an experienced specialist
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="sticky top-8">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={doctorInfo.image}
                      alt={doctorInfo.fullName}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <Card className="mt-6 border-blue-100">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Award className="h-5 w-5 text-blue-600 mr-2" />
                        Professional Associations
                      </h3>
                      <ul className="space-y-2">
                        {doctorInfo.associations.map((association, index) => (
                          <li key={index} className="text-gray-700 flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>{association}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="md:col-span-3 space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {doctorInfo.fullName}
                  </h2>
                  <p className="text-xl text-blue-600 font-semibold mb-4">
                    {doctorInfo.qualifications}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                      <Briefcase className="h-3 w-3 mr-1" />
                      {doctorInfo.experience} Experience
                    </Badge>
                    <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-200">
                      <GraduationCap className="h-3 w-3 mr-1" />
                      {doctorInfo.institution}
                    </Badge>
                  </div>
                </div>

                <Card className="border-blue-100">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">About Dr. Raja</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {doctorInfo.bio}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-100">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Award className="h-6 w-6 text-blue-600 mr-2" />
                      Areas of Specialization
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {doctorInfo.specializations.map((specialization, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                          <span className="text-gray-700">{specialization}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-100 bg-green-50">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Heart className="h-6 w-6 text-green-600 mr-2" />
                      Beyond the Clinic
                    </h3>
                    <p className="text-gray-700 leading-relaxed italic">
                      "{doctorInfo.personalNote}"
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-100 bg-blue-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="h-5 w-5 text-blue-600 mr-2" />
                      Patient-Centered Approach
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Dr. Raja believes in taking time to listen to each patient's concerns and explaining 
                      diagnoses and treatment options in clear, understandable terms. His approach combines 
                      evidence-based medicine with compassionate care, ensuring that every patient receives 
                      personalized attention and the best possible outcomes.
                    </p>
                  </CardContent>
                </Card>

                <div className="grid sm:grid-cols-3 gap-4">
                  <Card className="text-center border-blue-100">
                    <CardContent className="p-6">
                      <p className="text-3xl font-bold text-blue-600 mb-1">{doctorInfo.experience}</p>
                      <p className="text-gray-600">Clinical Experience</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center border-blue-100">
                    <CardContent className="p-6">
                      <p className="text-3xl font-bold text-blue-600 mb-1">5000+</p>
                      <p className="text-gray-600">Patients Treated</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center border-blue-100">
                    <CardContent className="p-6">
                      <p className="text-3xl font-bold text-blue-600 mb-1">100+</p>
                      <p className="text-gray-600">Lives Changed</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctor;
