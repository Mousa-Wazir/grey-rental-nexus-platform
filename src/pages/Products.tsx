
import React, { useState } from 'react';
import { MessageCircle, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const products = [
  {
    id: 1,
    name: 'Handcrafted Wooden Table',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    price: 'Rs. 2,500/day',
    seller: 'Ahmad Furniture',
    rating: 4.8,
    reviews: 24,
    verified: true,
    category: 'furniture',
    description: 'Beautiful handcrafted wooden dining table'
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
    category: 'home decor',
    description: 'Elegant vintage ceramic vase for home decoration'
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
    category: 'clothing',
    description: 'Beautiful traditional dress with intricate embroidery'
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
    category: 'accessories',
    description: 'Premium handmade leather handbag'
  },
  {
    id: 5,
    name: 'Handwoven Carpet',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    price: 'Rs. 1,800/day',
    seller: 'Heritage Textiles',
    rating: 4.9,
    reviews: 28,
    verified: true,
    category: 'home decor',
    description: 'Authentic handwoven carpet with traditional patterns'
  },
  {
    id: 6,
    name: 'Wooden Jewelry Box',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    price: 'Rs. 400/day',
    seller: 'Wood Craft Studio',
    rating: 4.5,
    reviews: 12,
    verified: true,
    category: 'handicrafts',
    description: 'Beautifully carved wooden jewelry box'
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'furniture', label: 'Furniture' },
    { value: 'home decor', label: 'Home Decor' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'handicrafts', label: 'Handicrafts' },
    { value: 'health & beauty', label: 'Health & Beauty' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-4">All Products</h1>
          <p className="text-gray-600">Discover unique products from local creators</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="font-medium">Filters:</span>
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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
                
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                <p className="text-lg font-bold text-primary mb-2">{product.price}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mb-4">{product.seller}</p>
                
                <div className="space-y-2">
                  <Button className="w-full localena-yellow text-black font-medium">
                    Rent Now
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Contact
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
