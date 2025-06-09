
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
      // Handle message sending logic here
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full localena-green text-white shadow-lg hover:shadow-xl transition-all"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96">
          <Card className="h-full shadow-xl">
            <CardHeader className="localena-green text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-white text-lg">Live Support</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-green-700 p-1"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-green-100 text-sm">We're here to help!</p>
            </CardHeader>
            
            <CardContent className="flex flex-col h-full p-0">
              {/* Chat Messages */}
              <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                  <p className="text-sm">Hello! How can we help you today?</p>
                  <span className="text-xs text-gray-500">Support Team</span>
                </div>
              </div>
              
              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="localena-green text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Quick Actions */}
                <div className="flex space-x-2 mt-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    📞 Call
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    📧 Email
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    💬 WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
