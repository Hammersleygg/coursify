import React from 'react';
import './searchBar.css'; 

export default function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search for your school..." />
            {/* Include a button */}
        </div>
    );
}
