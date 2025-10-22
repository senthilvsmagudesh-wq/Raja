import React from 'react';
import { Award, Heart, Clock, MapPin, Users, Target } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { clinicInfo } from '../mock';

const About = () => {
  const whyChooseUs = [
    {
      icon: Award,
      title: "Experienced Specialist",
      description: "Dr. Raja brings 15 years of expertise in neurology with DM from AIIMS Delhi"
    },
    {
      icon: Target,
      title: "Advanced Diagnostics",
      description: "State-of-the-art equipment including EEG, EMG/NCS, VEP, and BERA facilities"
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Patient-centered approach with personalized treatment plans for every individual"
    },
    {
      icon: MapPin,
      title: "Convenient Location",
      description: "Easily accessible clinic in Arisipalayam with ample parking facilities"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated staff with years of experience in neurological care and patient support"
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Extended hours from Monday to Saturday to accommodate your schedule"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About RAJA Health Care Clinic
            </h1>
            <p className="text-xl text-gray-600">
              Your trusted partner in neurological health and wellness
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in personalized, evidence-based neurology care for patients of all ages. 
                At RAJA Health Care Clinic, our mission is to provide comprehensive neurological services 
                that combine clinical excellence with compassionate care. We are committed to helping our 
                patients achieve optimal neurological health through accurate diagnosis, effective treatment, 
                and ongoing support.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassion</h3>
                <p className="text-gray-600">
                  Treating every patient with empathy, respect, and understanding
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4">
                  <Award className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Delivering the highest standards of neurological care
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Utilizing latest diagnostic technologies and treatment methods
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes RAJA Health Care Clinic the preferred choice for neurology care in Salem
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-blue-100 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clinic Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Clinic Information
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Clock className="h-6 w-6 text-blue-600 mr-2" />
                    Working Hours
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>{clinicInfo.workingHours.weekdays}</p>
                    <p>{clinicInfo.workingHours.saturday}</p>
                    <p className="text-red-600 font-semibold">{clinicInfo.workingHours.sunday}</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                    Location & Parking
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>{clinicInfo.fullAddress}</p>
                    <p className="text-green-600 font-semibold">✓ Ample parking available</p>
                    <p className="text-green-600 font-semibold">✓ Wheelchair accessible</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Clinic
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
                alt="Clinic Reception"
                className="w-full h-64 object-cover"
              />
              <div className="bg-white p-4">
                <p className="text-center font-semibold text-gray-900">Modern Reception Area</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a"
                alt="Treatment Room"
                className="w-full h-64 object-cover"
              />
              <div className="bg-white p-4">
                <p className="text-center font-semibold text-gray-900">State-of-the-Art Equipment</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163"
                alt="Clinic Interior"
                className="w-full h-64 object-cover"
              />
              <div className="bg-white p-4">
                <p className="text-center font-semibold text-gray-900">Comfortable Environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
