import React from 'react';
import { Briefcase, Award } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { staff } from '../mock';

const Staff = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-600">
              Meet the dedicated professionals who make exceptional care possible
            </p>
          </div>
        </div>
      </section>

      {/* Staff Members */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {staff.map((member) => (
                <Card key={member.id} className="border-blue-100 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full mb-4">
                      <span className="text-3xl font-bold text-blue-600">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <Badge className="bg-blue-100 text-blue-700 mb-3">{member.role}</Badge>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-3">
                      <Briefcase className="h-4 w-4 text-blue-600" />
                      <span>{member.experience} experience</span>
                    </div>
                    {member.specialization && (
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-3">
                        <Award className="h-4 w-4 text-cyan-600" />
                        <span>{member.specialization}</span>
                      </div>
                    )}
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Working Together for Your Health
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team works collaboratively to provide seamless care throughout your journey with us. 
              From your first call to schedule an appointment, through diagnosis and treatment, to ongoing 
              follow-up care, every team member is dedicated to ensuring your comfort, understanding, and 
              optimal health outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;
