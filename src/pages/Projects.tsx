
import React, { useState } from 'react';
import GeometricElements from '../components/GeometricElements';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
    { id: 'infrastructure', label: 'Infrastructure' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Heydar Aliyev Center',
      location: 'Baku, Azerbaijan',
      year: '2012',
      category: 'cultural',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop',
      description: 'A flowing cultural center that blurs the boundaries between ground and building'
    },
    {
      id: 2,
      title: 'London Aquatics Centre',
      location: 'London, UK',
      year: '2011',
      category: 'infrastructure',
      image: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=600&h=400&fit=crop',
      description: 'Olympic venue inspired by the fluid geometry of water in motion'
    },
    {
      id: 3,
      title: 'Maxxi Museum',
      location: 'Rome, Italy',
      year: '2010',
      category: 'cultural',
      image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=600&h=400&fit=crop',
      description: 'Contemporary art museum with intersecting circulation paths'
    },
    {
      id: 4,
      title: 'Galaxy Soho',
      location: 'Beijing, China',
      year: '2012',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=600&h=400&fit=crop',
      description: 'Flowing office complex with continuous interior courtyards'
    },
    {
      id: 5,
      title: 'One Thousand Museum',
      location: 'Miami, USA',
      year: '2019',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop',
      description: 'Luxury residential tower with exoskeleton structure'
    },
    {
      id: 6,
      title: 'Al Wakrah Stadium',
      location: 'Qatar',
      year: '2019',
      category: 'infrastructure',
      image: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=600&h=400&fit=crop',
      description: 'Stadium design inspired by dhow boats and seashells'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Header */}
      <section className="py-16 px-6 relative">
        <GeometricElements variant="floating" />
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-deco text-5xl md:text-7xl font-bold text-mocha-800 mb-8">
            Projects
          </h1>
          <div className="w-40 h-1 bg-gradient-to-r from-mocha-400 to-copper mx-auto mb-8" />
          <p className="font-nouveau text-xl text-mocha-600 max-w-3xl mx-auto leading-relaxed">
            Explore the revolutionary buildings that redefined architecture and pushed 
            the boundaries of design and engineering.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-nouveau text-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-mocha-500 text-white shadow-lg'
                    : 'bg-white text-mocha-600 hover:bg-mocha-100 border border-mocha-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 auto-rows-auto" style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' 
          }}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  index % 3 === 0 ? 'md:col-span-2' : ''
                } ${index % 4 === 1 ? 'md:row-span-2' : ''}`}
                style={{ 
                  height: index % 4 === 1 ? '600px' : '400px' 
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-mocha-400/80 rounded-full text-sm font-nouveau mb-2">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-deco text-2xl font-bold mb-2 group-hover:text-mocha-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-nouveau text-mocha-200 mb-2">{project.location}</p>
                  <p className="font-nouveau text-sm opacity-90 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Geometric accent */}
                <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white/50 rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                
                {/* Art Nouveau inspired corner decoration */}
                <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                  <div className="absolute -top-8 -left-8 w-16 h-16 border-4 border-mocha-400/60 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 bg-gradient-to-br from-mocha-50 to-white relative">
        <GeometricElements variant="background" className="text-mocha-100" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-deco text-4xl font-bold text-mocha-800 mb-8">
            Design Innovation
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-mocha-400 to-copper mx-auto mb-12" />
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-mocha-400 rounded-full flex items-center justify-center">
                <span className="font-deco text-white font-bold">1</span>
              </div>
              <h3 className="font-deco text-xl font-semibold text-mocha-800">
                Parametric Design
              </h3>
              <p className="font-nouveau text-mocha-600">
                Using mathematical algorithms to generate complex, fluid forms that respond to environmental and functional requirements.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-mocha-400 rounded-full flex items-center justify-center">
                <span className="font-deco text-white font-bold">2</span>
              </div>
              <h3 className="font-deco text-xl font-semibold text-mocha-800">
                Structural Innovation
              </h3>
              <p className="font-nouveau text-mocha-600">
                Pushing engineering boundaries to realize seemingly impossible forms through advanced materials and construction techniques.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-mocha-400 rounded-full flex items-center justify-center">
                <span className="font-deco text-white font-bold">3</span>
              </div>
              <h3 className="font-deco text-xl font-semibold text-mocha-800">
                Spatial Experience
              </h3>
              <p className="font-nouveau text-mocha-600">
                Creating immersive environments that transform how people move through and experience architectural space.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
