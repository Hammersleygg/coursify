// Home.js
import React from 'react';
import { ReactComponent as LargeLogo } from '../../assets/LargeLogo.svg';
import './home.css'; // Import a CSS file for home page styling
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
    return (
        <div className="home-container">
                <LargeLogo className='LargeLogo'/>
                <SearchBar />
        </div>
    );
};

export default Home;