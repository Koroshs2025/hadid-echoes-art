
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';
import GeometricBackground from './GeometricBackground';

interface ContactUsProps {
  variant?: 'full' | 'compact';
}

const ContactUs: React.FC<ContactUsProps> = ({ variant = 'full' }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted');
  };

  return (
    <section className={`${variant === 'full' ? 'py-20' : 'py-16'} px-6 relative`}>
      <GeometricBackground variant="subtle" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="w-16 h-px bg-mocha-400 mx-auto mb-6" />
          <h2 className="font-deco text-4xl font-bold text-mocha-800 mb-4">
            Contact Us
          </h2>
          <p className="font-nouveau text-lg text-mocha-600 max-w-2xl mx-auto">
            Get in touch to learn more about Zaha Hadid's architectural legacy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-mocha-200">
            <CardHeader>
              <CardTitle className="font-deco text-2xl text-mocha-800">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-nouveau text-mocha-700">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      className="border-mocha-200 focus:border-mocha-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-nouveau text-mocha-700">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      className="border-mocha-200 focus:border-mocha-400"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-nouveau text-mocha-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="border-mocha-200 focus:border-mocha-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-nouveau text-mocha-700">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    className="border-mocha-200 focus:border-mocha-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-nouveau text-mocha-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    required
                    className="border-mocha-200 focus:border-mocha-400"
                    placeholder="Tell us about your interest in Zaha Hadid's work..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-mocha-700 hover:bg-mocha-800 text-white font-nouveau"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-deco text-2xl font-semibold text-mocha-800 mb-6">
                Get in Touch
              </h3>
              <p className="font-nouveau text-lg text-mocha-600 leading-relaxed mb-8">
                For inquiries about exhibitions, publications, or research on Dame Zaha Hadid's 
                architectural legacy, please reach out to us.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-mocha-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-mocha-600" />
                </div>
                <div>
                  <h4 className="font-nouveau font-semibold text-mocha-800 mb-1">Email</h4>
                  <p className="font-nouveau text-mocha-600">info@zahahadid-legacy.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-mocha-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-mocha-600" />
                </div>
                <div>
                  <h4 className="font-nouveau font-semibold text-mocha-800 mb-1">Phone</h4>
                  <p className="font-nouveau text-mocha-600">+44 20 7253 9900</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-mocha-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-mocha-600" />
                </div>
                <div>
                  <h4 className="font-nouveau font-semibold text-mocha-800 mb-1">Address</h4>
                  <p className="font-nouveau text-mocha-600">
                    Zaha Hadid Architects<br />
                    10 Bowling Green Lane<br />
                    London EC1R 0BQ, UK
                  </p>
                </div>
              </div>
            </div>

            {variant === 'full' && (
              <div className="mt-8 p-6 bg-mocha-50 rounded-lg border border-mocha-200">
                <h4 className="font-deco text-lg font-semibold text-mocha-800 mb-3">
                  Opening Hours
                </h4>
                <div className="space-y-2 font-nouveau text-sm text-mocha-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
