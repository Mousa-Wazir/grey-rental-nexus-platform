
export const products = [
  // Furniture (5 products)
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
    id: 7,
    name: 'Modern Office Chair',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    price: 'Rs. 1,200/day',
    seller: 'Office Solutions',
    rating: 4.7,
    reviews: 18,
    verified: true,
    category: 'furniture',
    description: 'Ergonomic office chair with lumbar support'
  },
  {
    id: 8,
    name: 'Wooden Bookshelf',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    price: 'Rs. 3,000',
    seller: 'Wood Crafters',
    rating: 4.6,
    reviews: 22,
    verified: true,
    category: 'furniture',
    description: 'Solid wood bookshelf with 5 compartments'
  },
  {
    id: 9,
    name: 'Leather Sofa Set',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    price: 'Rs. 4,500/day',
    seller: 'Luxury Living',
    rating: 4.9,
    reviews: 35,
    verified: true,
    category: 'furniture',
    description: 'Premium leather 3-seater sofa set'
  },
  {
    id: 10,
    name: 'Coffee Table Glass Top',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    price: 'Rs. 1,800/day',
    seller: 'Modern Furniture',
    rating: 4.5,
    reviews: 16,
    verified: false,
    category: 'furniture',
    description: 'Elegant glass-top coffee table'
  },

  // Home Decor (5 products)
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
    id: 11,
    name: 'Wall Art Canvas',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    price: 'Rs. 600',
    seller: 'Art Gallery',
    rating: 4.7,
    reviews: 14,
    verified: true,
    category: 'home decor',
    description: 'Abstract canvas wall art for modern homes'
  },
  {
    id: 12,
    name: 'Decorative Mirror',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    price: 'Rs. 1,200/day',
    seller: 'Mirror Magic',
    rating: 4.6,
    reviews: 19,
    verified: true,
    category: 'home decor',
    description: 'Ornate decorative mirror with gold frame'
  },
  {
    id: 13,
    name: 'Table Lamp Set',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    price: 'Rs. 900/day',
    seller: 'Lighting Solutions',
    rating: 4.8,
    reviews: 21,
    verified: false,
    category: 'home decor',
    description: 'Modern table lamp with fabric shade'
  },

  // Clothing (5 products)
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
    id: 14,
    name: 'Designer Suit',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
    price: 'Rs. 2,500',
    seller: 'Fashion House',
    rating: 4.8,
    reviews: 26,
    verified: true,
    category: 'clothing',
    description: 'Premium designer suit for formal occasions'
  },
  {
    id: 15,
    name: 'Wedding Lehenga',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
    price: 'Rs. 5,000/day',
    seller: 'Bridal Collection',
    rating: 4.9,
    reviews: 45,
    verified: true,
    category: 'clothing',
    description: 'Stunning bridal lehenga with heavy work'
  },
  {
    id: 16,
    name: 'Casual T-Shirt',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
    price: 'Rs. 800',
    seller: 'Casual Wear',
    rating: 4.4,
    reviews: 12,
    verified: false,
    category: 'clothing',
    description: 'Comfortable cotton casual t-shirt'
  },
  {
    id: 17,
    name: 'Formal Blazer',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
    price: 'Rs. 1,800/day',
    seller: 'Professional Wear',
    rating: 4.6,
    reviews: 18,
    verified: true,
    category: 'clothing',
    description: 'Sharp formal blazer for business meetings'
  },

  // Accessories (5 products)
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
    id: 18,
    name: 'Silver Jewelry Set',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop',
    price: 'Rs. 2,000/day',
    seller: 'Jewelry Palace',
    rating: 4.8,
    reviews: 29,
    verified: true,
    category: 'accessories',
    description: 'Elegant silver necklace and earring set'
  },
  {
    id: 19,
    name: 'Designer Watch',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop',
    price: 'Rs. 1,500',
    seller: 'Time Zone',
    rating: 4.7,
    reviews: 22,
    verified: true,
    category: 'accessories',
    description: 'Luxury designer watch with leather strap'
  },
  {
    id: 20,
    name: 'Sunglasses',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop',
    price: 'Rs. 500/day',
    seller: 'Optical Store',
    rating: 4.5,
    reviews: 16,
    verified: false,
    category: 'accessories',
    description: 'Stylish UV protection sunglasses'
  },
  {
    id: 21,
    name: 'Designer Belt',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop',
    price: 'Rs. 800',
    seller: 'Fashion Accessories',
    rating: 4.4,
    reviews: 11,
    verified: true,
    category: 'accessories',
    description: 'Genuine leather designer belt'
  },

  // Handicrafts (5 products)
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
  },
  {
    id: 22,
    name: 'Clay Pottery Set',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    price: 'Rs. 1,200',
    seller: 'Ceramic Arts',
    rating: 4.7,
    reviews: 19,
    verified: true,
    category: 'handicrafts',
    description: 'Handmade clay pottery dinner set'
  },
  {
    id: 23,
    name: 'Bamboo Basket',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    price: 'Rs. 600/day',
    seller: 'Eco Crafts',
    rating: 4.6,
    reviews: 14,
    verified: false,
    category: 'handicrafts',
    description: 'Eco-friendly bamboo storage basket'
  },
  {
    id: 24,
    name: 'Hand-painted Tiles',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    price: 'Rs. 2,000',
    seller: 'Tile Art Studio',
    rating: 4.8,
    reviews: 23,
    verified: true,
    category: 'handicrafts',
    description: 'Beautiful hand-painted ceramic tiles'
  },
  {
    id: 25,
    name: 'Embroidered Wall Hanging',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    price: 'Rs. 800/day',
    seller: 'Traditional Crafts',
    rating: 4.5,
    reviews: 17,
    verified: true,
    category: 'handicrafts',
    description: 'Traditional embroidered wall decoration'
  }
];

export const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'furniture', label: 'Furniture' },
  { value: 'home decor', label: 'Home Decor' },
  { value: 'clothing', label: 'Clothing' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'handicrafts', label: 'Handicrafts' },
  { value: 'health & beauty', label: 'Health & Beauty' }
];
