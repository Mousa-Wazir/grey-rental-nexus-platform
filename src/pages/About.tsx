
import React from 'react';
import { Shield, Users, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'NADRA Verified',
      description: 'All our sellers are verified through NADRA authentication for your security.'
    },
    {
      icon: Users,
      title: 'Local Community',
      description: 'Supporting local creators and artisans in your community.'
    },
    {
      icon: Award,
      title: 'Quality Products',
      description: 'Carefully curated products that meet our quality standards.'
    },
    {
      icon: Heart,
      title: 'Trusted Platform',
      description: 'Built with trust and transparency at the core of everything we do.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Local Products' },
    { number: '500+', label: 'Verified Vendors' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '100%', label: 'Secure Rentals' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Localena</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Bringing local creativity to life through our trusted rental marketplace
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Localena, we believe in the power of local creativity. Our mission is to create 
                a platform where talented creators can showcase their unique products and connect 
                with customers who appreciate authentic, handcrafted items.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We're building a community where trust, quality, and local talent come together 
                to create meaningful connections between creators and customers.
              </p>
              <p className="text-lg text-gray-600">
                From handcrafted furniture to beautiful decor, traditional clothing to unique 
                accessories - we're here to help you discover and rent the best local products 
                in your community.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" 
                alt="Local artisan at work" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Localena?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing a safe, reliable, and enjoyable platform for both creators and customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-200">
              Growing our community of creators and customers every day
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Commitment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to maintaining the highest standards of quality, security, and customer 
              satisfaction. Our NADRA verification process ensures that all sellers are authentic, 
              and our review system helps maintain quality across the platform.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Quality Assurance</h3>
                <p className="text-gray-600 mb-4">
                  Every product on our platform goes through a quality review process. We work 
                  closely with our creators to ensure that every item meets our standards for 
                  craftsmanship and authenticity.
                </p>
                <h3 className="text-2xl font-bold text-primary mb-4">Community Support</h3>
                <p className="text-gray-600">
                  We provide ongoing support to our creators, helping them succeed in growing 
                  their businesses and reaching more customers in their local communities.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
