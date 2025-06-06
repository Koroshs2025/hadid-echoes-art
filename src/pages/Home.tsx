
import React from 'react';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSlider />
      
      {/* Minimal Introduction Section */}
      <section className="py-32 px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
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

      {/* Featured Works - Minimalist Grid */}
      <section className="py-20 px-12 lg:px-24 bg-mocha-25">
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

      {/* Quote Section */}
      <section className="py-32 px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
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
