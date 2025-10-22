import React from 'react';
import { Calendar, Megaphone, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { updates } from '../mock';

const Updates = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'event':
        return Calendar;
      case 'awareness':
        return Megaphone;
      case 'health-tip':
        return Lightbulb;
      default:
        return Calendar;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case 'event':
        return { bg: 'bg-green-100', text: 'text-green-700', badge: 'bg-green-600' };
      case 'awareness':
        return { bg: 'bg-blue-100', text: 'text-blue-700', badge: 'bg-blue-600' };
      case 'health-tip':
        return { bg: 'bg-cyan-100', text: 'text-cyan-700', badge: 'bg-cyan-600' };
      default:
        return { bg: 'bg-blue-100', text: 'text-blue-700', badge: 'bg-blue-600' };
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest Updates & Health Tips
            </h1>
            <p className="text-xl text-gray-600">
              Stay informed about health camps, awareness programs, and neurological health tips
            </p>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {updates.map((update) => {
              const Icon = getIcon(update.type);
              const colors = getColor(update.type);

              return (
                <Card key={update.id} className="border-blue-100 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`flex-shrink-0 w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                          <Icon className={`h-6 w-6 ${colors.text}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl text-gray-900 mb-2">{update.title}</CardTitle>
                          {update.date && (
                            <p className="text-sm text-gray-600 flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {update.date}
                            </p>
                          )}
                        </div>
                      </div>
                      <Badge className={`${colors.badge} text-white`}>
                        {update.type.replace('-', ' ').toUpperCase()}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{update.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Neurological Health Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Recognize Stroke Signs (FAST)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>F</strong>ace: Does one side droop?</li>
                    <li><strong>A</strong>rms: Can both arms be raised?</li>
                    <li><strong>S</strong>peech: Is speech slurred?</li>
                    <li><strong>T</strong>ime: Call emergency immediately!</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-cyan-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-cyan-900 mb-3">Migraine Prevention</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Maintain regular sleep schedule</li>
                    <li>• Stay hydrated throughout the day</li>
                    <li>• Identify and avoid trigger foods</li>
                    <li>• Practice stress management techniques</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Brain Health Habits</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Regular physical exercise</li>
                    <li>• Mental stimulation (puzzles, reading)</li>
                    <li>• Social engagement and interaction</li>
                    <li>• Balanced, nutritious diet</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-cyan-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-cyan-900 mb-3">When to See a Neurologist</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Persistent or severe headaches</li>
                    <li>• Numbness or tingling</li>
                    <li>• Memory problems</li>
                    <li>• Seizures or tremors</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Updates;
