
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import GeometricElements from '../components/GeometricElements';

const Home = () => {
  return (
    <div className="min-h-screen bg-cream">
      <HeroSlider />
      
      {/* Introduction Section */}
      <section className="py-20 px-6 relative">
        <GeometricElements variant="floating" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-deco text-4xl md:text-6xl font-bold text-mocha-800 mb-6">
              Architect of the Impossible
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-mocha-400 to-copper mx-auto mb-8" />
            <p className="font-nouveau text-xl text-mocha-600 max-w-3xl mx-auto leading-relaxed">
              Dame Zaha Hadid transformed the architectural landscape with her revolutionary parametric designs, 
              fluid forms, and visionary approach to space and structure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-deco text-3xl font-semibold text-mocha-700">
                Breaking Boundaries
              </h3>
              <p className="font-nouveau text-lg text-mocha-600 leading-relaxed">
                From the flowing curves of the Heydar Aliyev Center to the crystalline geometry 
                of the London Aquatics Centre, her buildings challenge our perception of what 
                architecture can be.
              </p>
              <GeometricElements variant="accent" className="py-4" />
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=600&h=400&fit=crop"
                alt="Architectural detail"
                className="w-full h-80 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-4 border-mocha-400 rotate-45" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-copper/80" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Preview */}
      <section className="py-20 bg-gradient-to-br from-mocha-50 to-white relative">
        <GeometricElements variant="background" className="text-mocha-200" />
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-deco text-4xl font-bold text-mocha-800 text-center mb-16">
            Iconic Structures
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=400&h=300&fit=crop',
                title: 'Fluid Dynamics',
                description: 'Organic forms in concrete and steel'
              },
              {
                image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=300&fit=crop',
                title: 'Parametric Design',
                description: 'Mathematical precision meets artistic vision'
              },
              {
                image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop',
                title: 'Sculptural Architecture',
                description: 'Buildings as monumental art pieces'
              }
            ].map((work, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-deco text-xl font-semibold mb-2">{work.title}</h3>
                  <p className="font-nouveau text-sm opacity-90">{work.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/50 rotate-45 group-hover:rotate-90 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
