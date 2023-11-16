import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './class.css';

const Class = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    // Fetch courses from the CSV file
    fetch('/classCSV.csv')
      .then(response => response.text())
      .then(data => {
        // Parse CSV data and extract the course names
        const rows = data.split('\n');
        const courseNames = rows.map(row => row.split(',')[0].trim());
        setCourses(courseNames);
        setSelectedCourse(courseNames[0]); // Set the default selected course
      })
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
    // We can add additional logic here if needed
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

export default Class;
