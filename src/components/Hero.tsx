
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-700">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center hero-overlay"
        style={{
          backgroundImage: `url('/lovable-uploads/63522707-9668-4cac-ab1d-a19233d324d3.png')`
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bringing Local{' '}
            <span className="text-yellow-400">Creativity to Life</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
            Discover and rent unique local products from talented creators
            in your community. From handcrafted furniture to beautiful decor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="localena-yellow text-black font-medium px-8 py-3 text-lg">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="localena-green text-white font-medium px-8 py-3 text-lg">
              NADRA Verification
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">1000+</div>
              <div className="text-sm md:text-base text-gray-300">Local Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">500+</div>
              <div className="text-sm md:text-base text-gray-300">Verified Vendors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">100%</div>
              <div className="text-sm md:text-base text-gray-300">Secure Rentals</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
