import React from 'react';
import { ArrowRight, Shield, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <div className="relative h-[700px] bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&q=80')`
    }} />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-5xl mx-auto px-6">
          <h1 className="font-bold mb-6 leading-tight text-slate-50 md:text-5xl text-2xl">
            Rent or Buy Local Products{' '}
            <span className="text-slate-50">with Confidence</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Discover verified sellers, secure transactions, and authentic products 
            in Pakistan's most trusted marketplace
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/auth">
              <Button className="localena-yellow text-black font-semibold px-8 py-4 -mx-0 text-xs">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/nadra-verification">
              <Button className="bg-white text-black hover:bg-gray-50 font-semibold py-[20px] gap-y-px text-center text-xs">
                <Shield className="mr-2 h-5 w-5" />
                Verify Identity to Build Trust
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-400">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-8 w-8 text-yellow-400" />
              <div className="text-left">
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-gray-300">Verified Sellers</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Users className="h-8 w-8 text-yellow-400" />
              <div className="text-left">
                <div className="text-2xl font-bold text-yellow-400">50K+</div>
                <div className="text-sm text-gray-300">Happy Customers</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Star className="h-8 w-8 text-yellow-400" />
              <div className="text-left">
                <div className="text-2xl font-bold text-yellow-400">4.9</div>
                <div className="text-sm text-gray-300">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;