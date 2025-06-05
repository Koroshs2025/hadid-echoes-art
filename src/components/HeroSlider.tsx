
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop',
      title: 'Fluid Architecture',
      subtitle: 'Redefining the boundaries of space'
    },
    {
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1920&h=1080&fit=crop',
      title: 'Parametric Design',
      subtitle: 'Where mathematics meets beauty'
    },
    {
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=1920&h=1080&fit=crop',
      title: 'Visionary Structures',
      subtitle: 'Buildings that defy convention'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Geometric overlay elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-mocha-400 rotate-45 animate-geometric-float opacity-70" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-mocha-500/80 clip-path-triangle animate-geometric-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-40 h-2 bg-gradient-to-r from-mocha-400 to-copper" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-4xl px-6 animate-fade-in">
          <h1 className="font-deco text-6xl md:text-8xl font-bold text-white mb-6 tracking-wide">
            {slides[currentSlide].title}
          </h1>
          <p className="font-nouveau text-xl md:text-2xl text-mocha-100 mb-8">
            {slides[currentSlide].subtitle}
          </p>
          <div className="w-24 h-1 bg-mocha-400 mx-auto" />
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-mocha-300 transition-colors bg-black/20 hover:bg-black/40 rounded-full p-3"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-mocha-300 transition-colors bg-black/20 hover:bg-black/40 rounded-full p-3"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-mocha-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
