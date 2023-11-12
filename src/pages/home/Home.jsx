// Home.js
import React from 'react';
import './home.css'; // Import a CSS file for home page styling
import SearchBar from '../../components/SearchBar/SearchBar';
import WebsiteDescription from '../../components/description/WebsiteDescription';

const Home = () => {
    return (
        <div className="home-container">
                <WebsiteDescription />
                <SearchBar />
        </div>
    );
};

export default Home;
//thst comment 
/*
import SearchBar from '../../components/SearchBar/SearchBar';
import WebsiteDescription from '../../components/description/WebsiteDescription';

import './home.css';

export default function Home() {
  return (
    <>
      <WebsiteDescription />
      <SearchBar />
      <div className='home'>
      </div>
    </>
  )
}
*/