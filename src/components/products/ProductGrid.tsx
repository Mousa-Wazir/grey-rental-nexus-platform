
import React from 'react';
import ProductCard from './ProductCard';

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

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
