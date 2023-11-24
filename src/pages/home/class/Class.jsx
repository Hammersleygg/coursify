import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './class.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    fetch('/classCSV.csv')
      .then(response => response.text())
      .then(data => {
        const rows = data.split('\n');
        const courseNames = rows
          .map(row => row.split(',')[0].trim())
          .filter(course => course && course.toLowerCase() !== 'class name');
        const sortedCourses = courseNames.sort((a, b) => a.localeCompare(b));
        setCourses(sortedCourses);
      })
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div className="container">
      <h2 style={{ fontSize: '44px' }}>Course Catalog</h2>
      <div className="course-list">
        {courses.map(course => (
          // Filter out the button that says "Class Name"
          course.toLowerCase() !== 'class name' && (
            <Link
              key={course}
              to={`/class/${course}`}
              className={`course-link ${hoveredButton === course ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredButton(course)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="course-item">
                {course}
              </div>
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

export default Courses;
