
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductFilters from '@/components/products/ProductFilters';
import ProductGrid from '@/components/products/ProductGrid';
import { products, categories } from '@/data/products';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

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
        <ProductFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          categories={categories}
        />

        {/* Products Grid */}
        <ProductGrid products={filteredProducts} />
      </div>

      <Footer />
    </div>
  );
};

export default Products;
