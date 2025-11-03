import React, { useState } from 'react';
import { CreditCard, Plus } from 'lucide-react';

const PaymentIntegrationPage = () => {
  const [activeGateway, setActiveGateway] = useState('stripe');
  const [testMode, setTestMode] = useState(true);

  const gatewayConfigs = {
    stripe: {
      name: 'Stripe',
      description: 'Recommended for global payments with excellent security',
      fields: [
        { label: 'Publishable Key', type: 'text', placeholder: 'pk_test_...' },
        { label: 'Secret Key', type: 'password', placeholder: 'sk_test_...' },
        { label: 'Webhook Secret', type: 'password', placeholder: 'whsec_...' }
      ]
    },
    paypal: {
      name: 'PayPal',
      description: 'Popular for international students and easy integration',
      fields: [
        { label: 'Client ID', type: 'text', placeholder: 'Ad...' },
        { label: 'Client Secret', type: 'password', placeholder: 'EF...' },
        { label: 'Webhook ID', type: 'text', placeholder: 'WH...' }
      ]
    },
    razorpay: {
      name: 'Razorpay',
      description: 'Popular in India with competitive rates',
      fields: [
        { label: 'Key ID', type: 'text', placeholder: 'rzp_test_...' },
        { label: 'Key Secret', type: 'password', placeholder: '••••••••' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Gateway Integration</h1>
          <p className="text-gray-600">Configure payment gateways to accept payments from your students</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Gateway Configuration</h2>
            <label className="flex items-center">
              <span className="mr-2 text-sm text-gray-600">Test Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={testMode}
                  onChange={() => setTestMode(!testMode)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {Object.entries(gatewayConfigs).map(([key, config]) => (
              <button
                key={key}
                onClick={() => setActiveGateway(key)}
                className={`p-4 border-2 rounded-lg text-left transition-colors ${
                  activeGateway === key 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center mb-2">
                  <CreditCard className="w-6 h-6 mr-3 text-gray-600" />
                  <h3 className="font-medium text-gray-900">{config.name}</h3>
                </div>
                <p className="text-sm text-gray-600">{config.description}</p>
              </button>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">
              {gatewayConfigs[activeGateway].name} Configuration
            </h3>
            
            {gatewayConfigs[activeGateway].fields.map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            ))}

            <div className="flex justify-end space-x-4 pt-4">
              <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
                Save Configuration
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Pricing Plans</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-900">Basic Plan</h3>
                  <span className="text-lg font-bold text-blue-600">$49/month</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Access to all basic courses</p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>✓ Up to 10 courses</li>
                  <li>✓ Basic certificates</li>
                  <li>✓ Email support</li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium">
                  Update Plan
                </button>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-900">Premium Plan</h3>
                  <span className="text-lg font-bold text-purple-600">$99/month</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">All courses + certificates + priority support</p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>✓ Unlimited courses</li>
                  <li>✓ Premium certificates</li>
                  <li>✓ Priority support</li>
                  <li>✓ Advanced analytics</li>
                </ul>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium">
                  Update Plan
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Settings</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Currency
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>USD - United States Dollar</option>
                  <option>EUR - Euro</option>
                  <option>GBP - British Pound</option>
                  <option>INR - Indian Rupee</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tax Rate (%)
                </label>
                <input
                  type="number"
                  defaultValue="0"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Auto-refund failed payments</p>
                  <p className="text-sm text-gray-600">Automatically refund failed transactions</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Send payment receipts</p>
                  <p className="text-sm text-gray-600">Email receipts to students automatically</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium">
                Save Payment Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentIntegrationPage;