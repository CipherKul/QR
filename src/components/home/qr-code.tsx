"use client";

import React, { useState } from 'react';
import {
  Link,
  MessageSquare,
  Mail,
  Calendar,
  Wifi,
  Type,
  CreditCard,
  Phone,
  User,
  Shield,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface QROption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const QRGeneratorInterface: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(1);

  const qrOptions: QROption[] = [
    {
      id: 'link',
      title: 'Link',
      description: 'Open a website or link',
      icon: <Link className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 'text',
      title: 'Text',
      description: 'Show plain text',
      icon: <Type className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 'sms',
      title: 'SMS',
      description: 'Send an SMS',
      icon: <MessageSquare className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 'vcard',
      title: 'VCard',
      description: 'Share a contact card (Vcard)',
      icon: <CreditCard className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 'email',
      title: 'Email',
      description: 'Send an Email',
      icon: <Mail className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 'phone',
      title: 'Phone number',
      description: 'Call a phone number',
      icon: <Phone className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 'event',
      title: 'Event',
      description: 'Share a calendar event',
      icon: <Calendar className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 'mecard',
      title: 'Me Card',
      description: 'Share a contact card',
      icon: <User className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 'wifi',
      title: 'Wifi',
      description: 'Connect to a WiFi network',
      icon: <Wifi className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 'crypto',
      title: 'Crypto',
      description: 'Send or receive crypto',
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-blue-500'
    }
  ];

  const steps = [
    { number: 1, title: 'Select Destination', active: currentStep === 1 },
    { number: 2, title: 'Fill in details', active: currentStep === 2 },
    { number: 3, title: 'Design and download', active: currentStep === 3 }
  ];

  return (
    <div className="min-h-[90vh] max-w-7xl mx-auto p-6 rounded-[10px] px-12 mb-24 border-[1px] border-[#3A86FF]" style={{ background: 'linear-gradient(to bottom, #FFFFFF 0%, #3A86FF 100%)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header with Steps */}
        <div className="mb-8 mt-2">
          <div className="flex items-center justify-between">
            <button className="flex items-center text-[#3A86FF] hover:text-blue-700 transition-colors">
              <ChevronLeft className="w-5 h-5 mr-1" />
              Previous
            </button>

            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center ${step.active ? 'text-[#3A86FF]' : 'text-gray-500'}`}>
                    <span className="text-[16px] font-poppins mr-2">{step.number}.</span>
                    <span className="text-[16px] font-poppins">{step.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <ChevronRight className="w-4 h-4 mx-4 text-gray-400" />
                  )}
                </div>
              ))}
            </div>

            <button className="flex items-center text-[#3A86FF] hover:text-blue-700 transition-colors">
              Next
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-36">
          {/* Left Section - QR Options */}
          <div className="lg:col-span-2 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {qrOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`bg-white rounded-[10px] p-3 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 ${selectedOption === option.id ? 'ring-2 ring-[#3A86FF] shadow-lg' : 'shadow-md'
                    }`}
                >
                  <div className="flex items-start space-x-2 space-y-0">
                    <div className={`${option.color} text-white p-1.5 mt-2 ml-4 rounded-full flex-shrink-0`}>
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="text-[18px] font-semibold text-[#1F2937] font-poppins mb-1">
                        {option.title}
                      </h3>
                      <p className="text-[#4B5563] text-[16px] font-poppins">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - QR Preview */}
          <div className="lg:col-span-1 mt-6">

            <div className="text-center relative mr-4 mt-10">
              {/* QR Code Preview */}
              <img src="/images/qr-code.svg" alt="QR Code" className="w-72 h-72 mx-auto bg-white rounded-lg shadow-inner flex items-center justify-center" />

              {/* Format Selection */}
              <div className="mb-6 mt-10 absolute top-70 left-0">
                <button className="w-[285px] bg-[#3A86FF] hover:bg-blue-600 text-white py-2 px-6 rounded-[10px] font-medium transition-colors flex items-center justify-center">
                  Format: PNG
                  <ChevronRight className="w-5 h-5 ml-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRGeneratorInterface;