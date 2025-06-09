
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-bold text-yellow-400 mb-4 block">
              Localena
            </Link>
            <p className="text-gray-300 mb-4">
              Bringing local creativity to life through our trusted rental marketplace.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Support</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Home
              </Link>
              <Link to="/products" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Products
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-2 text-gray-300">
              <div>Home Decor</div>
              <div>Furniture</div>
              <div>Clothing</div>
              <div>Accessories</div>
              <div>Handicrafts</div>
              <div>Health & Beauty</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@localena.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Localena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
