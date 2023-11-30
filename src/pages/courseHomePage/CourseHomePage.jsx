import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import Modal from 'react-modal'; // Import the react-modal library
import './courseHomePage.css';

const CourseHomePage = () => {
  const [Comments, setComments] = useState([]);
  const [classInfo, setClassInfo] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [CommentText, setCommentText] = useState('');
  const location = useLocation();
  const { selectedCourse } = location.state || {};

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'classComments'));
        const CommentsData = [];
        querySnapshot.forEach((doc) => {
          CommentsData.push({
            id: doc.id,
            Comment: doc.data().Comment,
            userName: doc.data().UserName,

          });
        });
        setComments(CommentsData);

        const classSnapshot = await getDocs(collection(db, 'classComments'));
        classSnapshot.forEach((doc) => {
          setClassInfo(doc.data().class);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUserName('');
    setCommentText('');
  };

  const handleCommentSubmit = async () => {
    if (userName && CommentText) {
      try {
        const docRef = await addDoc(collection(db, 'classComments'), {
          UserName: userName,
          Comment: CommentText,
          class: classInfo
        });

        setComments([...Comments, { id: docRef.id, userName, Comment: CommentText,class: classInfo }]);
        closeModal();
      } catch (error) {
        console.error('Error adding document:', error);
      }
    }
  };

  const deleteComment = async (CommentId) => {
    try {
      await deleteDoc(doc(db, 'classComments', CommentId));
      setComments(Comments.filter((Comment) => Comment.id !== CommentId));
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  return (
    <div className="course-home-page-container">
      <h1 className="course-headline">{classInfo}</h1>
      <div className="grid-of-posts">
        {Comments.map((Comment) => (
          <div key={Comment.id} className="post">
            <span>{Comment.userName}: {Comment.Comment}</span>
            <button onClick={() => deleteComment(Comment.id)}>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={openModal}>Add Comment</button>

      {/* Custom Modal for adding Comments */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add Comment"
      >
        <h2>Add Your Comment</h2>
        <label>
          Name:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Comment:
          <textarea
            value={CommentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </label>
        <button onClick={handleCommentSubmit}>Submit</button>
        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
      </Modal>
    </div>
  );
};


export default CourseHomePage;
