
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop',
      title: 'Fluid Architecture',
      subtitle: 'Redefining spatial boundaries through parametric design'
    },
    {
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1920&h=1080&fit=crop',
      title: 'Parametric Design',
      subtitle: 'Where computational mathematics meets architectural beauty'
    },
    {
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=1920&h=1080&fit=crop',
      title: 'Visionary Structures',
      subtitle: 'Buildings that challenge conventional architectural thinking'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-mocha-50">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
        </div>
      ))}

      {/* Minimalist content */}
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="max-w-4xl px-12 ml-0 lg:ml-16">
          <div className="space-y-8">
            <div className="w-24 h-px bg-white mb-8" />
            <h1 className="font-maison text-5xl lg:text-7xl font-light text-white leading-tight tracking-wide">
              {slides[currentSlide].title}
            </h1>
            <p className="font-editorial text-lg lg:text-xl text-white/90 max-w-2xl font-light leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Minimal navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300"
      >
        <ChevronLeft size={20} strokeWidth={1} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300"
      >
        <ChevronRight size={20} strokeWidth={1} />
      </button>

      {/* Minimal slide indicators */}
      <div className="absolute bottom-12 left-12 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-8 h-px transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-12 right-12 text-white/80 font-editorial text-sm tracking-wider">
        <span className="font-light">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-2 text-white/40">/</span>
        <span className="font-light text-white/60">{String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default HeroSlider;
