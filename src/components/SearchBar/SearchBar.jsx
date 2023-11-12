import React, { useState, useEffect } from 'react';
import './searchBar.css';
import Papa from 'papaparse';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [classData, setClassData] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);

    useEffect(() => {
        fetch('/classCSV.csv')
            .then((response) => response.text())
            .then((csv) => {
                Papa.parse(csv, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        setClassData(result.data);
                    },
                });
            });
    }, []);

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        // Check if the query is "all" and display all classes
        if (query.toLowerCase() === 'all') {
            setResults(classData);
            setNotFound(false);
        } else {
            // Search for classes in the classData using the query
            const searchResults = classData.filter((classInfo) => {
                const classNumber = classInfo['Class Number'];
                return classNumber && classNumber.toLowerCase().includes(query.toLowerCase());
            });

            if (searchResults.length > 0) {
                setResults(searchResults);
                setNotFound(false);
            } else {
                setResults([]);
                setNotFound(true);
            }
        }
    };

    const handleClassClick = (classInfo) => {
        setSelectedClass(classInfo);
    };

    const closePopup = () => {
        setSelectedClass(null);
    };

    return (
            <div className="search-bar">
                <input type="text" placeholder="Search for a class (or type 'all' for every class)..." value={query} onChange={handleQueryChange} />
                <button onClick={handleSearch}>Search</button>
            {notFound ? (
                <p className={`not-found-message`}>Sorry, course not found....</p>
            ) : (
                results.length > 0 && (
                    <ul className="search-results">
                        {results.map((classInfo, index) => (
                            <li key={index} onClick={() => handleClassClick(classInfo)}>
                                <p>Class Name: {classInfo['Class Name']}</p>
                                <p>Class Number: {classInfo['Class Number']}</p>
                                <p>Tips: {classInfo['Tips']}</p>
                            </li>
                        ))}
                    </ul>
                )
            )}
            {selectedClass && (
                <div className="modal-container">
                    <div className="modal">
                        <span className="close" onClick={closePopup}>&times;</span>
                        <p>Class Name: {selectedClass['Class Name']}</p>
                        <p>Class Number: {selectedClass['Class Number']}</p>
                        <p>Tips: {selectedClass['Tips']}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
