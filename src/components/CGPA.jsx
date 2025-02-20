import React from 'react';

function Cgpa({ enrolledCourses, cgpa }) {
  const gradeToPoint = {
    A: 4.0, "A-": 3.7, "B+": 3.3, B: 3.0, "B-": 2.7,
    "C+": 2.3, C: 2.0, "C-": 1.7, D: 1.3, F: 0.0,
  };

  return (
    <div className="cgpa-container">
      <h2>CGPA Calculator</h2>
      <div className="cgpa-display">
        <h4>
          CGPA: <span>{cgpa}</span>
        </h4>
      </div>

      <table className="cgpa-table">
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Credit Units</th>
            <th>Grade</th>
            <th>Grade Points</th>
          </tr>
        </thead>
        <tbody>
          {enrolledCourses.map((course, index) => (
            <tr key={index}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.credit}</td>
              <td>{course.grade}</td>
              <td>{gradeToPoint[course.grade] || 0.0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cgpa;
