
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  seller: string;
  rating: number;
  reviews: number;
  verified: boolean;
  category: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-primary text-sm line-clamp-2 hover:underline">{product.name}</h3>
          </Link>
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
          <Link to={`/product/${product.id}`}>
            <Button className="w-full localena-yellow text-black font-medium">
              View Details
            </Button>
          </Link>
          <Button variant="outline" className="w-full" size="sm">
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
