import React from 'react';

function Home({ enrolledCourses, cgpa }) {
  return (
    <div className="home-container">
      <h1>Welcome Back, Student 🎓</h1>
      <p>Here's a quick overview of your academic progress.</p>

      {/* Overview Cards */}
      <div className="overview-cards">
        <div className="card">
          <h2>📚 {enrolledCourses.length} Courses</h2>
          <p>Enrolled this semester</p>
        </div>
        <div className="card">
          <h2>📝 3 Assignments</h2> 
          <p>Due this week</p>
        </div>
        <div className="card">
          <h2>🎯 {cgpa} CGPA</h2>
          <p>Current academic standing</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          {enrolledCourses.map((course, index) => (
            <li key={index}>📖 Enrolled in "{course.name}"</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
