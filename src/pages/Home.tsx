
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import GeometricBackground from '../components/GeometricBackground';

const Home = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <GeometricBackground variant="subtle" />
      <HeroSlider />
      
      {/* Minimal Introduction Section */}
      <section className="py-32 px-12 lg:px-24 relative">
        <GeometricBackground variant="subtle" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="w-16 h-px bg-mocha-400 mb-8" />
              <h2 className="font-maison text-3xl lg:text-4xl font-light text-mocha-900 leading-tight">
                Architect of the Impossible
              </h2>
            </div>
            
            <div className="lg:col-span-8 space-y-8">
              <p className="font-editorial text-lg lg:text-xl text-mocha-700 font-light leading-relaxed">
                Dame Zaha Hadid transformed the architectural landscape with her revolutionary 
                parametric designs, fluid forms, and visionary approach to space and structure.
              </p>
              <p className="font-editorial text-base lg:text-lg text-mocha-600 font-light leading-relaxed">
                From the flowing curves of the Heydar Aliyev Center to the crystalline geometry 
                of the London Aquatics Centre, her buildings challenge our perception of what 
                architecture can be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-12 lg:px-24 bg-mocha-25 relative">
        <GeometricBackground variant="prominent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="w-16 h-px bg-mocha-400 mx-auto mb-6" />
            <h2 className="font-maison text-3xl font-light text-mocha-900 mb-4">
              Design Philosophy
            </h2>
            <p className="font-editorial text-lg text-mocha-600 max-w-2xl mx-auto">
              Revolutionary principles that redefined architectural possibilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Parametric Design',
                description: 'Mathematical precision meets artistic vision through computational design methods',
                icon: '◇'
              },
              {
                title: 'Fluid Forms',
                description: 'Organic shapes that challenge traditional geometric constraints in architecture',
                icon: '∞'
              },
              {
                title: 'Spatial Innovation',
                description: 'Redefining the relationship between interior and exterior architectural spaces',
                icon: '△'
              }
            ].map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-white border border-mocha-200 rounded-lg mx-auto flex items-center justify-center group-hover:border-mocha-400 transition-colors duration-300">
                    <span className="text-2xl text-mocha-700">{feature.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 border border-mocha-300 rotate-45 opacity-60" />
                </div>
                <h3 className="font-maison text-xl font-light text-mocha-900 mb-4">
                  {feature.title}
                </h3>
                <p className="font-editorial text-sm text-mocha-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works - Minimalist Grid */}
      <section className="py-20 px-12 lg:px-24 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="w-16 h-px bg-mocha-400 mb-6" />
            <h2 className="font-maison text-3xl font-light text-mocha-900">
              Selected Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=600&h=400&fit=crop',
                title: 'Fluid Dynamics',
                year: '2015',
                description: 'Organic forms in concrete and steel'
              },
              {
                image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=600&h=400&fit=crop',
                title: 'Parametric Design',
                year: '2012',
                description: 'Mathematical precision meets artistic vision'
              },
              {
                image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=600&h=400&fit=crop',
                title: 'Sculptural Architecture',
                year: '2018',
                description: 'Buildings as monumental art pieces'
              }
            ].map((work, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-maison text-lg font-light text-mocha-900">{work.title}</h3>
                    <span className="font-editorial text-sm text-mocha-500 tracking-wider">{work.year}</span>
                  </div>
                  <p className="font-editorial text-sm text-mocha-600 font-light">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews/Testimonials Section */}
      <section className="py-20 px-12 lg:px-24 bg-mocha-50 relative">
        <GeometricBackground variant="prominent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="w-16 h-px bg-mocha-400 mx-auto mb-6" />
            <h2 className="font-maison text-3xl font-light text-mocha-900">
              Critical Acclaim
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                quote: "Hadid's buildings seem to defy gravity, creating spaces that are both functional and fantastical.",
                author: "Architectural Review",
                role: "Architecture Magazine"
              },
              {
                quote: "She transformed the very language of architecture, making the impossible seem inevitable.",
                author: "The Guardian",
                role: "Architecture Critic"
              }
            ].map((review, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-mocha-100 relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 border-2 border-mocha-300 rotate-45 bg-white" />
                  <blockquote className="font-editorial text-lg text-mocha-700 leading-relaxed mb-6 italic">
                    "{review.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-1 h-8 bg-mocha-400 mr-4" />
                    <div>
                      <cite className="font-maison text-sm font-medium text-mocha-900 not-italic">
                        {review.author}
                      </cite>
                      <p className="font-editorial text-xs text-mocha-600 uppercase tracking-wider">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-12 lg:px-24 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-16 h-px bg-mocha-400 mx-auto mb-12" />
          <blockquote className="font-maison text-2xl lg:text-3xl font-light text-mocha-800 leading-relaxed mb-8">
            "There are 360 degrees, so why stick to one?"
          </blockquote>
          <cite className="font-editorial text-sm text-mocha-600 tracking-wider uppercase">
            Zaha Hadid
          </cite>
        </div>
      </section>
    </div>
  );
};

export default Home;
