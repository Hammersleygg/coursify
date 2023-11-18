import {React} from 'react';
import { useLocation } from 'react-router-dom';
import './courseHomePage.css';

const CourseHomePage = () => {
const location = useLocation();
const {selectedCourse} = location.state || {};

    const mockPosts = [
        {
            content: "this is some advice."}, 
        {
            content: "this is some more advice."},
        {
            content: "this is some advice too."},
    ];
    return (
        <div className="course-home-page-container">
            <h1 className="course-headline">SELECTED COURSE </h1>
            {/* <h1>{selectedCourse? selectedCourse['Course Name'] : 'Course Name'}</h1> */}
            <div className="grid-of-posts">
                {mockPosts.map((post, index) => (
                    <div key={index} className="post">
                    {post.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseHomePage;