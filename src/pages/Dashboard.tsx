
import React, { useState } from 'react';
import { User, Package, Heart, ShoppingCart, Settings, Star, TrendingUp, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [userRole] = useState('customer'); // This would come from auth context

  const sidebarItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: TrendingUp },
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'cart', label: 'Cart', icon: ShoppingCart },
    { id: 'reviews', label: 'My Reviews', icon: Star },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const sellerItems = [
    { id: 'seller-overview', label: 'Seller Dashboard', icon: TrendingUp },
    { id: 'products', label: 'My Products', icon: Package },
    { id: 'orders', label: 'Orders Received', icon: Package },
    { id: 'earnings', label: 'Earnings', icon: TrendingUp },
    { id: 'reviews', label: 'Customer Reviews', icon: Star },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const menuItems = userRole === 'seller' ? sellerItems : sidebarItems;

  const stats = {
    customer: [
      { label: 'Products Purchased', value: '24', icon: Package, color: 'text-blue-600' },
      { label: 'Items in Wishlist', value: '12', icon: Heart, color: 'text-red-500' },
      { label: 'Cart Items', value: '3', icon: ShoppingCart, color: 'text-green-600' },
      { label: 'Average Rating Given', value: '4.8', icon: Star, color: 'text-yellow-500' },
    ],
    seller: [
      { label: 'Total Products', value: '45', icon: Package, color: 'text-blue-600' },
      { label: 'Orders This Month', value: '28', icon: Package, color: 'text-green-600' },
      { label: 'Total Earnings', value: 'Rs. 125,000', icon: TrendingUp, color: 'text-green-600' },
      { label: 'Average Rating', value: '4.9', icon: Star, color: 'text-yellow-500' },
    ]
  };

  const currentStats = stats[userRole as keyof typeof stats];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <Card>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-10 w-10 text-gray-600" />
                </div>
                <CardTitle className="text-lg">John Doe</CardTitle>
                <div className="flex justify-center space-x-2">
                  <Badge className="localena-green text-white text-xs">Verified</Badge>
                  <Badge variant="outline" className="text-xs">{userRole === 'seller' ? 'Seller' : 'Customer'}</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full text-left px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 transition-colors ${
                          activeTab === item.id ? 'bg-primary text-white hover:bg-primary' : 'text-gray-700'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' || activeTab === 'seller-overview' ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-primary">
                    {userRole === 'seller' ? 'Seller Dashboard' : 'Dashboard Overview'}
                  </h1>
                  <Button variant="outline" size="sm">
                    <Bell className="h-4 w-4 mr-2" />
                    Notifications
                  </Button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {currentStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">{stat.label}</p>
                              <p className="text-2xl font-bold text-primary">{stat.value}</p>
                            </div>
                            <Icon className={`h-8 w-8 ${stat.color}`} />
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                          <div className="flex-1">
                            <p className="font-medium">
                              {userRole === 'seller' ? 'New order received' : 'Order placed successfully'}
                            </p>
                            <p className="text-sm text-gray-600">2 hours ago</p>
                          </div>
                          <Badge variant="outline">New</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>
                    {menuItems.find(item => item.id === activeTab)?.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {activeTab} content will be implemented here. This includes detailed views for orders, wishlist, cart, reviews, and settings.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
