//import {React} from 'react';
import { useLocation} from 'react-router-dom';
import './courseHomePage.css';
import firebase from 'firebase/app';
import {db,auth } from "../../firebase-config";
import { getDocs, collection,addDoc,doc } from "firebase/firestore";
import { useState, useEffect } from 'react';
import * as React from "react";





const CourseHomePage = () => {
    const [comments, setComments] = useState([]);
    const [classInfo, setClassInfo] = useState('');
    const location = useLocation();
    const { selectedCourse } = location.state || {};
  
    useEffect(() => {
      const getData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'classComments'));
          const commentsData = [];
          querySnapshot.forEach((doc) => {
            commentsData.push(doc.data().Comment);
          });
          setComments(commentsData);
  
          // Fetch class information here
          // For example, assuming 'class' is the field containing the class information
          const classSnapshot = await getDocs(collection(db, 'class'));
          classSnapshot.forEach((doc) => {
            setClassInfo(doc.data().class);
          });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      getData();
    }, []);
  
    return (
      <div className="course-home-page-container">
        <h1 className="course-headline">{classInfo}</h1>
        <div className="grid-of-posts">
          {comments.map((comment, index) => (
            <div key={index} className="post">
              {comment}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CourseHomePage;