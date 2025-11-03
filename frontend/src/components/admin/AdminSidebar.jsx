// src/components/admin/AdminSidebar.jsx
import React from 'react';
import { Menu, X, BarChart3, Users, Video, CreditCard, Settings, LogOut } from 'lucide-react';

const AdminSidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <h1 className="text-xl font-bold text-gray-900">LMS Admin</h1>
              <p className="text-sm text-gray-600">Administrator Panel</p>
            </div>
          </div>
        </div>
        
        <nav className="p-4 space-y-2">
          <button
            onClick={() => { setActiveTab('overview'); setSidebarOpen(false); }}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'overview' 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <BarChart3 className="w-5 h-5 mr-3" />
            Dashboard Overview
          </button>
          
          <button
            onClick={() => { setActiveTab('users'); setSidebarOpen(false); }}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'users' 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Users className="w-5 h-5 mr-3" />
            User Management
          </button>
          
          <button
            onClick={() => { setActiveTab('courses'); setSidebarOpen(false); }}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'courses' 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Video className="w-5 h-5 mr-3" />
            Course Management
          </button>
          
          <button
            onClick={() => { setActiveTab('payments'); setSidebarOpen(false); }}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'payments' 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <CreditCard className="w-5 h-5 mr-3" />
            Payment Management
          </button>
          
          <button
            onClick={() => { setActiveTab('settings'); setSidebarOpen(false); }}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'settings' 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Settings className="w-5 h-5 mr-3" />
            System Settings
          </button>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <button className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default AdminSidebar;