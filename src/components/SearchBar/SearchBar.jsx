import React, { useState } from 'react';
import './searchBar.css'; 

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        // Search for schools in the database using the query
        const searchResults = ['School A', 'School B', 'School C']; // Replace with actual search results
        setResults(searchResults);
    };

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search for your school..." value={query} onChange={handleQueryChange} />
            <button onClick={handleSearch}>Search</button>
            {results.length > 0 && (
                <ul className="search-results">
                    {results.map((result) => (
                        <li key={result}>{result}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}