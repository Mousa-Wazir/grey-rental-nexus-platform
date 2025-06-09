
import React from 'react';
import { Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Category {
  value: string;
  label: string;
}

interface ProductFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
  categories: Category[];
}

const ProductFilters = ({ 
  selectedCategory, 
  setSelectedCategory, 
  sortBy, 
  setSortBy, 
  categories 
}: ProductFiltersProps) => {
  return (
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
  );
};

export default ProductFilters;
