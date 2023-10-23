// WebsiteDescription.js
import React from 'react';
import './WebsiteDescription.css';
import CoursifyInfographic from '../../assets/CoursifyInfographic.png';

const WebsiteDescription = () => {
    return (
        <div className="website-description">
            <img src={CoursifyInfographic} alt="Coursify Infographic" className='infographic'/>
            {/* <h2>Welcome to Coursify!</h2>
            <p>
            Coursify is your ultimate destination for an enriched learning journey.  
            At Coursify, we understand the importance of finding the perfect courses to 
            fuel your academic aspirations. For instructors and professors, Coursify provides 
            a valuable platform to learn more about what students are thinking about your class. 
            It empowers you to receive insightful feedback and evaluations from students,
            and fine-tune your courses to offer an exceptional educational experience. 
            Coursify aims to bridge the gap between learners and educators, fostering a 
            vibrant ecosystem of shared knowledge and a seamless learning experience. 
            </p> */}
        </div>
    );
};

export default WebsiteDescription;
