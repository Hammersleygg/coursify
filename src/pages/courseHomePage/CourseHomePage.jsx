import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import './courseHomePage.css';

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

  const addComment = async () => {
    const newComment = window.prompt('Enter your comment:');
    if (newComment) {
      try {
        const docRef = await addDoc(collection(db, 'classComments'), {
          Comment: newComment,
          // Add other fields as needed
        });

        setComments([...comments, newComment]);
      } catch (error) {
        console.error('Error adding document:', error);
      }
    }
  };

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
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default CourseHomePage;
