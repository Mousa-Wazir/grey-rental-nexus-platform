
import React from 'react';
import { MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const featuredProducts = [
  {
    id: 1,
    name: 'Handcrafted Wooden Table',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    price: 'Rs. 2,500/day',
    seller: 'Ahmad Furniture',
    rating: 4.8,
    reviews: 24,
    verified: true,
    rentable: true
  },
  {
    id: 2,
    name: 'Vintage Ceramic Vase',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    price: 'Rs. 800/day',
    seller: 'Pottery House',
    rating: 4.9,
    reviews: 18,
    verified: true,
    rentable: true
  },
  {
    id: 3,
    name: 'Traditional Embroidered Dress',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
    price: 'Rs. 1,200/day',
    seller: 'Ethnic Wear Studio',
    rating: 4.7,
    reviews: 32,
    verified: true,
    rentable: true
  },
  {
    id: 4,
    name: 'Handmade Leather Bag',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop',
    price: 'Rs. 600/day',
    seller: 'Leather Craft Co.',
    rating: 4.6,
    reviews: 15,
    verified: false,
    rentable: true
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">FEATURED COLLECTION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Discover Local Treasures
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Handpicked products from verified local creators
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-primary text-sm line-clamp-2">{product.name}</h3>
                  {product.verified && (
                    <Badge className="localena-green text-white text-xs">Verified</Badge>
                  )}
                </div>
                
                <p className="text-lg font-bold text-primary mb-2">{product.price}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mb-4">{product.seller}</p>
                
                {product.rentable && (
                  <div className="space-y-2">
                    <Button className="w-full localena-yellow text-black font-medium">
                      Rent Now
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Contact
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
