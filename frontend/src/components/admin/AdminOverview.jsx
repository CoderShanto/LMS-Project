// src/components/admin/AdminOverview.jsx
import React from 'react';
import { Users, Video, DollarSign, FileText, Plus } from 'lucide-react';

const AdminOverview = () => {
  const stats = {
    totalUsers: 1234,
    totalCourses: 89,
    totalRevenue: 24567,
    totalEnrollments: 3456
  };

  const recentUsers = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'student', joinDate: '2024-01-15' },
    { id: 2, name: 'Mike Chen', email: 'mike@example.com', role: 'instructor', joinDate: '2024-01-14' },
    { id: 3, name: 'Alex Rivera', email: 'alex@example.com', role: 'student', joinDate: '2024-01-13' },
    { id: 4, name: 'Emma Davis', email: 'emma@example.com', role: 'instructor', joinDate: '2024-01-12' }
  ];

  const recentPayments = [
    { id: 1, user: 'Sarah Johnson', course: 'React Development', amount: 99, date: '2024-01-15', status: 'completed' },
    { id: 2, user: 'Mike Chen', course: 'Laravel API', amount: 129, date: '2024-01-14', status: 'completed' },
    { id: 3, user: 'Alex Rivera', course: 'Full Stack JS', amount: 149, date: '2024-01-13', status: 'pending' }
  ];

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="header">
        <h1>Dashboard Overview</h1>
        <button className="add-btn">
          <Plus size={16} /> Add New
        </button>
      </div>
      
      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <div className="icon blue">
              <Users size={20} />
            </div>
            <div className="stat-title">Total Users</div>
          </div>
          <div className="stat-value">{stats.totalUsers.toLocaleString()}</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-header">
            <div className="icon green">
              <Video size={20} />
            </div>
            <div className="stat-title">Total Courses</div>
          </div>
          <div className="stat-value">{stats.totalCourses}</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-header">
            <div className="icon purple">
              <DollarSign size={20} />
            </div>
            <div className="stat-title">Total Revenue</div>
          </div>
          <div className="stat-value">${stats.totalRevenue.toLocaleString()}</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-header">
            <div className="icon orange">
              <FileText size={20} />
            </div>
            <div className="stat-title">Total Enrollments</div>
          </div>
          <div className="stat-value">{stats.totalEnrollments.toLocaleString()}</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <div className="activity-card">
          <div className="card-header">Recent Users</div>
          <div className="user-list">
            {recentUsers.map(user => (
              <div key={user.id} className="user-item">
                <div className="user-info">
                  <div className="user-name">{user.name}</div>
                  <div className="user-email">{user.email}</div>
                  <div className={`user-role ${user.role}`}>
                    {user.role}
                  </div>
                </div>
                <div className="join-date">{user.joinDate}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="activity-card">
          <div className="card-header">Recent Payments</div>
          <div className="payment-list">
            {recentPayments.map(payment => (
              <div key={payment.id} className="payment-item">
                <div className="payment-info">
                  <div className="payment-user">{payment.user}</div>
                  <div className="payment-course">{payment.course}</div>
                </div>
                <div className="payment-details">
                  <div className="payment-amount">${payment.amount}</div>
                  <div className={`payment-status ${payment.status}`}>
                    {payment.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;