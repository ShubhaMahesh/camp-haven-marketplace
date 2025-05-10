
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-camping-night py-24 md:py-32">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-camping-night/90 z-10"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/placeholder.svg')`,
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Adventure Awaits in <span className="text-camping-moss">Nature's Embrace</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Discover premium camping gear and book breathtaking campsites across the country. Your next adventure begins here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              className="px-8 py-6 text-lg bg-camping-forest hover:bg-camping-pine"
            >
              <Link to="/products">Shop Gear</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="px-8 py-6 text-lg border-white text-white hover:bg-white/10"
            >
              <Link to="/camping">Find Campsites</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
