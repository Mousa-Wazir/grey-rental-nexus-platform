
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Share2, Minus, Plus, ShoppingCart, MessageCircle, Phone, Mail, MapPin, Shield, Truck, RotateCcw, Zap, ZoomIn } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { products } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [cartItems, setCartItems] = useState(0);
  const [message, setMessage] = useState('');
  const [showMessageForm, setShowMessageForm] = useState(false);
  
  // Find product by ID
  const product = products.find(p => p.id === parseInt(id || '0'));
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Sample product images and data
  const productImages = [
    product.image,
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop'
  ];

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  // Determine if product is rentable (if price contains '/day')
  const isRentable = product.price.includes('/day');

  const handleAddToCart = () => {
    setCartItems(cartItems + quantity);
    console.log('Added to cart:', { product: product.name, quantity });
  };

  const handleSendMessage = () => {
    console.log('Message sent:', message);
    setMessage('');
    setShowMessageForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative group">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 hover:bg-white"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
                </div>
                {product.verified && (
                  <Badge className="localena-green text-white">Verified Seller</Badge>
                )}
              </div>
            </div>

            {/* Price */}
            <div className="border-b pb-6">
              <div className="text-3xl font-bold text-primary mb-2">{product.price}</div>
              <p className="text-green-600 font-medium">✓ In Stock</p>
            </div>

            {/* Short Description */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• {product.description}</li>
                <li>• High-quality craftsmanship</li>
                <li>• Sustainable materials</li>
                <li>• Local artisan made</li>
              </ul>
            </div>

            {/* Product Variants */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Size</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Color</label>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brown">Brown</SelectItem>
                    <SelectItem value="black">Black</SelectItem>
                    <SelectItem value="white">White</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Quantity</label>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {isRentable ? (
                <div className="space-y-2">
                  <Button className="w-full localena-yellow text-black font-medium">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Rent Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Buy Now
                  </Button>
                </div>
              ) : (
                <Button className="w-full localena-yellow text-black font-medium">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Buy Now
                </Button>
              )}
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleAddToCart}
              >
                Add to Cart ({cartItems})
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setShowMessageForm(!showMessageForm)}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Send Message
              </Button>

              {/* Optional Message Form */}
              {showMessageForm && (
                <div className="space-y-3 p-4 border rounded-lg bg-gray-50">
                  <Textarea
                    placeholder="Type your message to the seller..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full"
                  />
                  <div className="flex space-x-2">
                    <Button onClick={handleSendMessage} size="sm">Send</Button>
                    <Button variant="outline" onClick={() => setShowMessageForm(false)} size="sm">Cancel</Button>
                  </div>
                </div>
              )}
              
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4 pt-4 border-t">
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="h-4 w-4 mr-1" />
                SSL Secure
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Truck className="h-4 w-4 mr-1" />
                Fast Delivery
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <RotateCcw className="h-4 w-4 mr-1" />
                Easy Returns
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Material:</dt>
                    <dd className="font-medium">Premium Wood</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Dimensions:</dt>
                    <dd className="font-medium">120x80x75 cm</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Weight:</dt>
                    <dd className="font-medium">25 kg</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Category:</dt>
                    <dd className="font-medium capitalize">{product.category}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            {/* Delivery Information */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery & Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Truck className="h-4 w-4 mt-1 text-green-600" />
                    <div>
                      <p className="font-medium">Free Delivery</p>
                      <p className="text-sm text-gray-600">Estimated 2-3 days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RotateCcw className="h-4 w-4 mt-1 text-blue-600" />
                    <div>
                      <p className="font-medium">30-Day Returns</p>
                      <p className="text-sm text-gray-600">Free return if damaged</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seller Information */}
            <Card>
              <CardHeader>
                <CardTitle>Seller Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">{product.seller}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">4.8 seller rating</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">• 2+ years on platform</p>
                    <p className="text-sm text-gray-600">• 95% positive feedback</p>
                    <p className="text-sm text-gray-600">• Fast response time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Customer Support Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              Customer Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-medium mb-1">WhatsApp Chat</h4>
                <p className="text-sm text-gray-600 mb-2">Instant messaging support</p>
                <Button variant="outline" size="sm">Chat Now</Button>
              </div>
              <div className="text-center">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-medium mb-1">Phone Support</h4>
                <p className="text-sm text-gray-600 mb-2">+92-300-1234567</p>
                <Button variant="outline" size="sm">Call Now</Button>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-medium mb-1">Email Support</h4>
                <p className="text-sm text-gray-600 mb-2">support@localena.com</p>
                <Button variant="outline" size="sm">Send Email</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <Card className="hover:shadow-md transition-shadow">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-sm line-clamp-2 mb-2">{relatedProduct.name}</h3>
                      <p className="font-bold text-primary">{relatedProduct.price}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
