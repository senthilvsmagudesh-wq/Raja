import React from 'react';
import { Brain, Activity, Zap, Stethoscope } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { services } from '../mock';

const Services = () => {
  const getCategoryIcon = (category) => {
    if (category.includes('Conditions')) return Brain;
    if (category.includes('Diagnostic')) return Activity;
    if (category.includes('Specialized')) return Zap;
    return Stethoscope;
  };

  const getCategoryColor = (index) => {
    const colors = [
      { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', title: 'text-blue-900' },
      { bg: 'bg-cyan-50', border: 'border-cyan-200', icon: 'text-cyan-600', title: 'text-cyan-900' },
      { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', title: 'text-blue-900' }
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive neurological care with advanced diagnostics and specialized treatments
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {services.map((serviceCategory, categoryIndex) => {
              const Icon = getCategoryIcon(serviceCategory.category);
              const colors = getCategoryColor(categoryIndex);

              return (
                <div key={serviceCategory.id}>
                  <div className="text-center mb-12">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.bg} rounded-full mb-4`}>
                      <Icon className={`h-8 w-8 ${colors.icon}`} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {serviceCategory.category}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {serviceCategory.items.map((service, index) => (
                      <Card
                        key={index}
                        className={`${colors.border} hover:shadow-lg transition-all duration-300 group`}
                      >
                        <CardHeader>
                          <CardTitle className={`text-xl ${colors.title} group-hover:${colors.icon} transition-colors`}>
                            {service.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  What to Expect During Your Visit
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong className="text-blue-600">Consultation:</strong> Dr. Raja will take detailed history, 
                    perform a thorough neurological examination, and discuss your symptoms and concerns.
                  </p>
                  <p>
                    <strong className="text-blue-600">Diagnosis:</strong> Based on the clinical assessment, 
                    appropriate diagnostic tests may be recommended to confirm the diagnosis.
                  </p>
                  <p>
                    <strong className="text-blue-600">Treatment Plan:</strong> A personalized treatment plan will be 
                    developed, which may include medications, lifestyle modifications, or specialized therapies.
                  </p>
                  <p>
                    <strong className="text-blue-600">Follow-up:</strong> Regular follow-up appointments will be 
                    scheduled to monitor your progress and adjust treatment as needed.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Need More Information About Our Services?
          </h3>
          <p className="text-xl mb-6 text-blue-100">
            Our team is here to answer all your questions
          </p>
          <p className="text-2xl font-semibold">
            Call us at 076959 91173
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
