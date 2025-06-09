
import React, { useState } from 'react';
import { Upload, Shield, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NadraVerification = () => {
  const [uploadedFiles, setUploadedFiles] = useState({
    cnicFront: null,
    cnicBack: null
  });
  const [verificationStatus, setVerificationStatus] = useState('pending'); // pending, submitted, approved, rejected

  const handleFileUpload = (type: 'cnicFront' | 'cnicBack', file: File) => {
    setUploadedFiles(prev => ({
      ...prev,
      [type]: file
    }));
  };

  const handleSubmit = () => {
    if (uploadedFiles.cnicFront && uploadedFiles.cnicBack) {
      setVerificationStatus('submitted');
      console.log('NADRA verification submitted');
    }
  };

  const getStatusBadge = () => {
    switch (verificationStatus) {
      case 'pending':
        return <Badge variant="outline" className="text-gray-600"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
      case 'submitted':
        return <Badge className="bg-blue-500 text-white"><Clock className="h-3 w-3 mr-1" />Under Review</Badge>;
      case 'approved':
        return <Badge className="localena-green text-white"><CheckCircle className="h-3 w-3 mr-1" />Verified</Badge>;
      case 'rejected':
        return <Badge className="bg-red-500 text-white"><AlertCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-yellow-400 mr-3" />
            <h1 className="text-4xl font-bold text-primary">NADRA Verification</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build trust with verified identity. Upload your CNIC for admin approval and get your verification badge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="h-5 w-5 mr-2" />
                Upload CNIC Documents
                {getStatusBadge()}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* CNIC Front */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  CNIC Front Side
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => e.target.files?.[0] && handleFileUpload('cnicFront', e.target.files[0])}
                    className="hidden"
                    id="cnic-front"
                  />
                  <label htmlFor="cnic-front" className="cursor-pointer">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      {uploadedFiles.cnicFront ? uploadedFiles.cnicFront.name : 'Click to upload CNIC front'}
                    </p>
                  </label>
                </div>
              </div>

              {/* CNIC Back */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  CNIC Back Side
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => e.target.files?.[0] && handleFileUpload('cnicBack', e.target.files[0])}
                    className="hidden"
                    id="cnic-back"
                  />
                  <label htmlFor="cnic-back" className="cursor-pointer">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      {uploadedFiles.cnicBack ? uploadedFiles.cnicBack.name : 'Click to upload CNIC back'}
                    </p>
                  </label>
                </div>
              </div>

              <Button 
                onClick={handleSubmit} 
                disabled={!uploadedFiles.cnicFront || !uploadedFiles.cnicBack || verificationStatus === 'submitted'}
                className="w-full localena-yellow text-black font-medium"
              >
                {verificationStatus === 'submitted' ? 'Submitted for Review' : 'Submit for Verification'}
              </Button>
            </CardContent>
          </Card>

          {/* Information Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Why Verify Your Identity?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Build Trust</h4>
                    <p className="text-sm text-gray-600">Verified users are more trusted by buyers and sellers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Leave Reviews</h4>
                    <p className="text-sm text-gray-600">Only verified users can submit product reviews</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Seller Benefits</h4>
                    <p className="text-sm text-gray-600">Verified sellers get priority in search results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Security</h4>
                    <p className="text-sm text-gray-600">Helps prevent fraud and fake accounts</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Verification Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-medium">Upload Documents</h4>
                    <p className="text-sm text-gray-600">Upload clear photos of both sides of your CNIC</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-medium">Admin Review</h4>
                    <p className="text-sm text-gray-600">Our team reviews your documents (24-48 hours)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-medium">Get Verified</h4>
                    <p className="text-sm text-gray-600">Receive your verification badge and enhanced features</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NadraVerification;
