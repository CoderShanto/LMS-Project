import React from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';

const CourseManagement = () => {
  const recentCourses = [
    { id: 1, title: 'React Development Masterclass', instructor: 'Sarah Johnson', students: 156, revenue: 15444 },
    { id: 2, title: 'Advanced Laravel API Development', instructor: 'Mike Chen', students: 89, revenue: 11491 },
    { id: 3, title: 'Full Stack JavaScript', instructor: 'Alex Rivera', students: 203, revenue: 30247 }
  ];

  return (
    <div className="admin-dashboard">
      <div className="header">
        <h1>Course Management</h1>
        <div className="search-add-group">
          <input 
            type="text" 
            placeholder="Search courses..." 
            className="search-input"
          />
          <button className="add-btn">
            <Plus size={16} /> Add Course
          </button>
        </div>
      </div>
      
      <div className="courses-grid">
        {recentCourses.map(course => (
          <div key={course.id} className="course-card">
            <h3 className="course-title">{course.title}</h3>
            <p className="course-instructor">Instructor: {course.instructor}</p>
            <div className="course-stats">
              <div className="stat-row">
                <span className="stat-label">Students:</span>
                <span className="stat-value">{course.students}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Revenue:</span>
                <span className="stat-value">${course.revenue.toLocaleString()}</span>
              </div>
            </div>
            <div className="course-actions">
              <button className="btn primary">
                <Edit size={14} /> Edit
              </button>
              <button className="btn danger">
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseManagement;