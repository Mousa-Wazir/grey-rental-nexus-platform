
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
