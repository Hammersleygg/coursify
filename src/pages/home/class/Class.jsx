import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './class.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/classCSV.csv')
      .then(response => response.text())
      .then(data => {
        const rows = data.split('\n');
        const courseNames = rows.map(row => row.split(',')[0].trim());
        setCourses(courseNames);
        setSelectedCourse(courseNames[0]); // Set the default selected course
      })
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

const handleCourseChange = (event) => {
  const course = event.target.value;
  setSelectedCourse(course);
  navigate(`/class/${course}`, {state: {selectedCourse: course}});
};

  return (
    <div className="container">
      <div className="select-container">
        <label htmlFor="course" className="sr-only">Select Course:</label>
        <select
          id="course"
          className="select-course"
          value={selectedCourse}
          onChange={handleCourseChange}
        >
          {courses.map(course => (
            <option key={course} value={course}>{course}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Courses;
