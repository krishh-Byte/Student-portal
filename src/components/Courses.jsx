import React, { useState } from 'react';


function Courses({ enrollCourse, enrolledCourses, removeCourse }) {
  const [newCourse, setNewCourse] = useState({ id: '', name: '', credit: '', grade: '' });

  const handleInputChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleEnroll = () => {
    if (newCourse.id && newCourse.name && newCourse.credit && newCourse.grade) {
      enrollCourse(newCourse);
      setNewCourse({ id: '', name: '', credit: '', grade: '' });
    }
  };

  return (
    <div className="courses-container">
      <h2>Enroll in a Course</h2>
      <div className="enroll-form">
        <input type="text" name="id" placeholder="Course ID" value={newCourse.id} onChange={handleInputChange} className="input-field" />
        <input type="text" name="name" placeholder="Course Name" value={newCourse.name} onChange={handleInputChange} className="input-field" />
        <input type="number" name="credit" placeholder="Credit Units" value={newCourse.credit} onChange={handleInputChange} className="input-field" />
        <select name="grade" value={newCourse.grade} onChange={handleInputChange} className="input-field">
          <option value="">Select Grade</option>
          <option value="A">A</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="B-">B-</option>
          <option value="C+">C+</option>
          <option value="C">C</option>
          <option value="C-">C-</option>
          <option value="D">D</option>
          <option value="F">F</option>
        </select>
        <button onClick={handleEnroll} className="enroll-btn">Enroll</button>
      </div>

      <h3>Enrolled Courses </h3>
      <table className="courses-table">
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Credit Units</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {enrolledCourses.map((course, index) => (
            <tr key={index} className="course-row">
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.credit}</td>
              <td>{course.grade}</td>
              <td><button onClick={() => removeCourse(course.id)} className="delete-btn">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Courses;
