
import React from 'react';
import GeometricElements from '../components/GeometricElements';

const About = () => {
  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 relative">
        <GeometricElements variant="floating" />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-deco text-5xl md:text-7xl font-bold text-mocha-800 mb-8">
            Dame Zaha Hadid
          </h1>
          <div className="w-40 h-1 bg-gradient-to-r from-mocha-400 to-copper mx-auto mb-8" />
          <p className="font-nouveau text-2xl text-mocha-600 leading-relaxed">
            1950 - 2016
          </p>
          <p className="font-nouveau text-xl text-mocha-600 mt-6 leading-relaxed">
            The first woman to receive the Pritzker Architecture Prize
          </p>
        </div>
      </section>

      {/* Biography Section with Portrait */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="font-deco text-4xl font-semibold text-mocha-800 mb-6">
                  Early Life & Education
                </h2>
                <p className="font-nouveau text-lg text-mocha-600 leading-relaxed mb-4">
                  Born in Baghdad, Iraq, Zaha Hadid studied mathematics at the American University 
                  of Beirut before pursuing architecture at the Architectural Association School 
                  in London.
                </p>
                <p className="font-nouveau text-lg text-mocha-600 leading-relaxed">
                  Her mathematical background would later become fundamental to her revolutionary 
                  approach to parametric design and fluid architectural forms.
                </p>
              </div>

              <div>
                <h3 className="font-deco text-3xl font-semibold text-mocha-700 mb-4">
                  Revolutionary Vision
                </h3>
                <p className="font-nouveau text-lg text-mocha-600 leading-relaxed">
                  Hadid's work challenged the rigid geometry of modernist architecture, 
                  introducing flowing, dynamic forms that seemed to defy gravity and 
                  conventional structural logic.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/b9e7e3c8-33d5-423d-b72d-e3cb292487cc.png"
                alt="Zaha Hadid Portrait"
                className="w-full h-96 object-cover rounded-lg shadow-2xl grayscale"
              />
              <div className="absolute -top-6 -left-6 w-20 h-20 border-4 border-mocha-400 rotate-45 animate-geometric-float" />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-copper/80 clip-path-triangle" />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-20 bg-gradient-to-br from-mocha-50 to-white relative">
        <GeometricElements variant="background" className="text-mocha-100" />
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-deco text-4xl font-bold text-mocha-800 text-center mb-16">
            Milestones & Recognition
          </h2>

          <div className="space-y-12">
            {[
              {
                year: '2004',
                title: 'Pritzker Architecture Prize',
                description: 'First woman to receive architecture\'s highest honor'
              },
              {
                year: '2010',
                title: 'Stirling Prize',
                description: 'Won for the Maxxi Museum in Rome'
              },
              {
                year: '2012',
                title: 'Dame Commander',
                description: 'Honored by Queen Elizabeth II for services to architecture'
              },
              {
                year: '2016',
                title: 'Royal Gold Medal',
                description: 'First woman to receive RIBA\'s highest honor'
              }
            ].map((milestone, index) => (
              <div key={index} className="flex items-center space-x-8 group">
                <div className="flex-shrink-0 w-24 h-24 bg-mocha-400 rounded-full flex items-center justify-center group-hover:bg-copper transition-colors duration-300">
                  <span className="font-deco text-xl font-bold text-white">{milestone.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-deco text-2xl font-semibold text-mocha-800 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="font-nouveau text-lg text-mocha-600">
                    {milestone.description}
                  </p>
                </div>
                <div className="hidden md:block w-12 h-12 border-2 border-mocha-300 rotate-45 group-hover:rotate-90 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-deco text-4xl font-bold text-mocha-800 mb-8">
            Design Philosophy
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-mocha-400 to-copper mx-auto mb-12" />
          
          <blockquote className="font-nouveau text-2xl text-mocha-700 italic leading-relaxed mb-8">
            "There are 360 degrees, so why stick to one?"
          </blockquote>
          
          <p className="font-nouveau text-lg text-mocha-600 leading-relaxed">
            Hadid believed that architecture should be fluid, dynamic, and responsive to human movement. 
            Her parametric designs used advanced computational methods to create buildings that seemed 
            to flow like water or wind, challenging our fundamental understanding of space and form.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
