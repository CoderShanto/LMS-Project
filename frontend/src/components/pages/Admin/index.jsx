import React, { useState } from 'react';
import { BarChart3, CreditCard, LogOut, Menu, Plus, Settings, Users, Video } from 'lucide-react';
import AdminSidebar from '../../../components/admin/AdminSidebar';
import AdminOverview from '../../../components/admin/AdminOverview';
import UserManagement from '../../../components/admin/UserManagement';
import CourseManagement from '../../../components/admin/CourseManagement';
import PaymentManagement from '../../../components/admin/PaymentManagement';
import SystemSettings from '../../../components/admin/SystemSettings';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return <AdminOverview />;
      case 'users':
        return <UserManagement />;
      case 'courses':
        return <CourseManagement />;
      case 'payments':
        return <PaymentManagement />;
      case 'settings':
        return <SystemSettings />;
      default:
        return <AdminOverview />;
    }
  };

// Replace your existing AdminDashboard return statement with this structure
return (
  <div className="admin-dashboard">
    {/* Mobile header */}
    <div className="mobile-header">
      <button 
        onClick={() => setSidebarOpen(true)}
        className="menu-btn"
      >
        <Menu size={24} />
      </button>
      <h1 className="header-title">Admin Dashboard</h1>
      <div className="spacer"></div>
    </div>

    <div className="flex">
      {/* Sidebar */}
      <div className={`admin-sidebar ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="sidebar-header">
          <h1 className="sidebar-title">LMS Admin</h1>
          <p className="sidebar-subtitle">Administrator Panel</p>
        </div>
        <nav className="sidebar-nav">
          <button
            onClick={() => { setActiveTab('overview'); setSidebarOpen(false); }}
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
          >
            <BarChart3 className="nav-icon" />
            Dashboard Overview
          </button>
          <button
            onClick={() => { setActiveTab('users'); setSidebarOpen(false); }}
            className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
          >
            <Users className="nav-icon" />
            User Management
          </button>
          <button
            onClick={() => { setActiveTab('courses'); setSidebarOpen(false); }}
            className={`nav-item ${activeTab === 'courses' ? 'active' : ''}`}
          >
            <Video className="nav-icon" />
            Course Management
          </button>
          <button
            onClick={() => { setActiveTab('payments'); setSidebarOpen(false); }}
            className={`nav-item ${activeTab === 'payments' ? 'active' : ''}`}
          >
            <CreditCard className="nav-icon" />
            Payment Management
          </button>
          <button
            onClick={() => { setActiveTab('settings'); setSidebarOpen(false); }}
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
          >
            <Settings className="nav-icon" />
            System Settings
          </button>
        </nav>
        <div className="logout-section">
          <button className="logout-btn">
            <LogOut className="logout-icon" />
            Logout
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="mobile-overlay overlay-active"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="main-content">
        <div className="content-wrapper">
          {/* Your existing tab content goes here with updated class names */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="content-header">
                <h1 className="content-title">Dashboard Overview</h1>
                <div className="header-actions">
                  <button className="add-btn">
                    <Plus size={16} />
                    Add New
                  </button>
                </div>
              </div>
              {/* Stats Cards */}
              <div className="stats-grid">
                {/* ... your stats cards with updated classes */}
              </div>
              {/* Recent Activity */}
              <div className="activity-grid">
                {/* ... your activity cards with updated classes */}
              </div>
            </div>
          )}
          {/* ... other tabs with similar class updates */}
        </div>
      </div>
    </div>
  </div>
);
};

export default AdminDashboard;