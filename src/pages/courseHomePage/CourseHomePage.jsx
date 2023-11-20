import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import Modal from 'react-modal'; // Import the react-modal library
import './courseHomePage.css';

const CourseHomePage = () => {
  const [comments, setComments] = useState([]);
  const [classInfo, setClassInfo] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [commentText, setCommentText] = useState('');
  const location = useLocation();
  const { selectedCourse } = location.state || {};

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'classComments'));
        const commentsData = [];
        querySnapshot.forEach((doc) => {
          commentsData.push({
            id: doc.id,
            comment: doc.data().Comment,
            userName: doc.data().UserName,
          });
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUserName('');
    setCommentText('');
  };

  const handleCommentSubmit = async () => {
    if (userName && commentText) {
      try {
        const docRef = await addDoc(collection(db, 'classComments'), {
          UserName: userName,
          Comment: commentText,
          // Add other fields as needed
        });

        setComments([...comments, { id: docRef.id, userName, comment: commentText }]);
        closeModal();
      } catch (error) {
        console.error('Error adding document:', error);
      }
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await deleteDoc(doc(db, 'classComments', commentId));
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  return (
    <div className="course-home-page-container">
      <h1 className="course-headline">{classInfo}</h1>
      <div className="grid-of-posts">
        {comments.map((comment) => (
          <div key={comment.id} className="post">
            <span>{comment.userName}: {comment.comment}</span>
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={openModal}>Add Comment</button>

      {/* Custom Modal for adding comments */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add Comment"
      >
        <h2>Add Comment</h2>
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
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </label>
        <button onClick={handleCommentSubmit}>Submit</button>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </div>
  );
};

export default CourseHomePage;
