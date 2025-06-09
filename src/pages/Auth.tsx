
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'customer',
    cnic: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle authentication logic here
  };

  const socialLogins = [
    { name: 'Google', icon: '🌐', color: 'bg-red-500 hover:bg-red-600' },
    { name: 'Facebook', icon: '📘', color: 'bg-blue-600 hover:bg-blue-700' },
    { name: 'Twitter', icon: '🐦', color: 'bg-blue-400 hover:bg-blue-500' },
    { name: 'TikTok', icon: '🎵', color: 'bg-black hover:bg-gray-800' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-md mx-auto px-4 py-12">
        <Card className="shadow-lg">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-3xl font-bold text-primary">
              {isLogin ? 'Welcome Back' : 'Join Localena'}
            </CardTitle>
            <p className="text-gray-600">
              {isLogin 
                ? 'Sign in to your account to continue' 
                : 'Create your account to start buying and selling'
              }
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Social Login Buttons */}
            <div className="space-y-3">
              <p className="text-sm text-center text-gray-500">Sign {isLogin ? 'in' : 'up'} with</p>
              <div className="grid grid-cols-2 gap-3">
                {socialLogins.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    className="flex items-center justify-center space-x-2"
                  >
                    <span className="text-lg">{social.icon}</span>
                    <span className="text-sm">{social.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with email</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-10"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Role</label>
                    <select
                      name="role"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.role}
                      onChange={handleInputChange}
                    >
                      <option value="customer">Customer</option>
                      <option value="seller">Seller</option>
                    </select>
                  </div>

                  {formData.role === 'seller' && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        CNIC Number <Badge className="ml-2 localena-green text-white text-xs">Required for Sellers</Badge>
                      </label>
                      <div className="relative">
                        <Shield className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          name="cnic"
                          type="text"
                          placeholder="12345-6789012-3"
                          className="pl-10"
                          value={formData.cnic}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  )}
                </>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="pl-10"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}

              <Button type="submit" className="w-full localena-yellow text-black font-medium py-3">
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            {/* Toggle Auth Mode */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 text-primary font-medium hover:underline"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>

            {isLogin && (
              <div className="text-center">
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot your password?
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Auth;
