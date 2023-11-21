import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import Modal from 'react-modal'; // Import the react-modal library
import './courseHomePage.css';

const CourseHomePage = () => {
  const [tips, settips] = useState([]);
  const [classInfo, setClassInfo] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [tipText, settipText] = useState('');
  const location = useLocation();
  const { selectedCourse } = location.state || {};

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'classtips'));
        const tipsData = [];
        querySnapshot.forEach((doc) => {
          tipsData.push({
            id: doc.id,
            tip: doc.data().tip,
            userName: doc.data().UserName,
          });
        });
        settips(tipsData);

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
    if (window.confirm('Are you sure you want to cancel?')) {
    setIsModalOpen(false);
    setUserName('');
    settipText('');
  }
  };

  const handletipSubmit = async () => {
    if (userName && tipText) {
      try {
        const docRef = await addDoc(collection(db, 'classtips'), {
          UserName: userName,
          tip: tipText,
          // Add other fields as needed
        });

        settips([...tips, { id: docRef.id, userName, tip: tipText }]);
        closeModal();
      } catch (error) {
        console.error('Error adding document:', error);
      }
    }
  };

  const deletetip = async (tipId) => {
    try {
      await deleteDoc(doc(db, 'classtips', tipId));
      settips(tips.filter((tip) => tip.id !== tipId));
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  return (
    <div className="course-home-page-container">
      <h1 className="course-headline">{classInfo}</h1>
      <div className="grid-of-posts">
        {tips.map((tip) => (
          <div key={tip.id} className="post">
            <span>{tip.userName}: {tip.tip}</span>
            <button onClick={() => deletetip(tip.id)}>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={openModal}>Add tip</button>

      {/* Custom Modal for adding tips */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {}}
        shouldCloseOnOverlayClick={false}
        contentLabel="Add tip"
      >
        <h2>Add Your Tip</h2>
        <label>
          Name:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          tip:
          <textarea
            value={tipText}
            onChange={(e) => settipText(e.target.value)}
          />
        </label>
        <button onClick={handletipSubmit}>Submit</button>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </div>
  );
};

export default CourseHomePage;
