
import React from 'react';
import GeometricElements from '../components/GeometricElements';

const Legacy = () => {
  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 relative">
        <GeometricElements variant="floating" />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-deco text-5xl md:text-7xl font-bold text-mocha-800 mb-8">
            Eternal Legacy
          </h1>
          <div className="w-40 h-1 bg-gradient-to-r from-mocha-400 to-copper mx-auto mb-8" />
          <p className="font-nouveau text-xl text-mocha-600 leading-relaxed">
            Her revolutionary vision continues to inspire architects and designers worldwide, 
            reshaping our understanding of space, form, and possibility.
          </p>
        </div>
      </section>

      {/* Impact Sections */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Architectural Innovation */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="font-deco text-4xl font-semibold text-mocha-800">
                  Architectural Revolution
                </h2>
                <p className="font-nouveau text-lg text-mocha-600 leading-relaxed">
                  Zaha Hadid fundamentally changed how we conceive of buildings. Her parametric designs 
                  introduced fluid, organic forms to an industry dominated by rigid geometric structures.
                </p>
                <p className="font-nouveau text-lg text-mocha-600 leading-relaxed">
                  Today, her influence can be seen in buildings worldwide, as architects embrace 
                  computational design and challenge traditional notions of architectural form.
                </p>
                <GeometricElements variant="accent" className="py-4" />
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
                  alt="Modern architecture"
                  className="w-full h-80 object-cover rounded-lg shadow-xl"
                />
                <div className="absolute -top-4 -left-4 w-16 h-16 border-4 border-mocha-400 rotate-45 animate-geometric-float" />
              </div>
            </div>
          </div>

          {/* Gender Barrier Breaking */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2 space-y-6">
                <h2 className="font-deco text-4xl font-semibold text-mocha-800">
                  Breaking Barriers
                </h2>
                <p className="font-nouveau text-lg text-mocha-600 leading-relaxed">
                  As the first woman to win the Pritzker Prize and receive the RIBA Gold Medal, 
                  Hadid opened doors for future generations of female architects.
                </p>
                <p className="font-nouveau text-lg text-mocha-600 leading-relaxed">
                  Her success challenged the male-dominated architecture establishment and 
                  demonstrated that visionary design knows no gender boundaries.
                </p>
              </div>
              <div className="lg:order-1 relative">
                <img
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop"
                  alt="Architectural detail"
                  className="w-full h-80 object-cover rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-copper/80 clip-path-triangle" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Impact */}
      <section className="py-20 bg-gradient-to-br from-mocha-50 to-white relative">
        <GeometricElements variant="background" className="text-mocha-100" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-deco text-4xl font-bold text-mocha-800 mb-12">
            Educational Influence
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6">
              <h3 className="font-deco text-2xl font-semibold text-mocha-700">
                Teaching Philosophy
              </h3>
              <p className="font-nouveau text-lg text-mocha-600 leading-relaxed">
                As a professor at prestigious institutions including Harvard, Columbia, and the University of Chicago, 
                Hadid influenced countless students to think beyond conventional architectural boundaries.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-deco text-2xl font-semibold text-mocha-700">
                Design Studios
              </h3>
              <p className="font-nouveau text-lg text-mocha-600 leading-relaxed">
                Her design studios emphasized experimentation with form, encouraging students to explore 
                radical geometries and challenge established design principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes & Philosophy */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-deco text-4xl font-bold text-mocha-800 text-center mb-16">
            Words of Wisdom
          </h2>
          
          <div className="space-y-16">
            <blockquote className="text-center">
              <p className="font-nouveau text-2xl md:text-3xl text-mocha-700 italic leading-relaxed mb-6">
                "I don't think that architecture is only about shelter, is only about a very simple enclosure. 
                It should be able to excite you, to calm you, to make you think."
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-mocha-400 to-copper mx-auto" />
            </blockquote>
            
            <blockquote className="text-center">
              <p className="font-nouveau text-2xl md:text-3xl text-mocha-700 italic leading-relaxed mb-6">
                "I have always appreciated those who dare to experiment with materials and proportions."
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-copper to-mocha-400 mx-auto" />
            </blockquote>
          </div>
        </div>
      </section>

      {/* Continuing Influence */}
      <section className="py-20 bg-mocha-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <GeometricElements variant="background" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-deco text-4xl font-bold mb-8">
            The Future She Built
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-mocha-400 to-copper mx-auto mb-12" />
          
          <p className="font-nouveau text-xl leading-relaxed mb-8">
            Zaha Hadid Architects continues her legacy, completing projects she envisioned and 
            developing new works that carry forward her revolutionary approach to design.
          </p>
          
          <p className="font-nouveau text-lg leading-relaxed opacity-90">
            From the flowing curves of the Heydar Aliyev Center to the crystalline geometry of her final works, 
            her influence on contemporary architecture remains profound and enduring.
          </p>
          
          <div className="mt-16 flex justify-center">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 border-2 border-mocha-400 rotate-45" />
              <div className="w-20 h-1 bg-gradient-to-r from-mocha-400 to-copper" />
              <div className="w-8 h-8 bg-copper rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legacy;
