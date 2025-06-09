
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    products: 150
  },
  {
    id: 2,
    name: 'Furniture',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    products: 200
  },
  {
    id: 3,
    name: 'Clothing',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
    products: 300
  },
  {
    id: 4,
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop',
    products: 180
  },
  {
    id: 5,
    name: 'Handicrafts',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    products: 120
  },
  {
    id: 6,
    name: 'Health & Beauty',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    products: 90
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Browse Categories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover unique products across different categories from local creators
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.name.toLowerCase()}`}
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-primary mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.products} products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
