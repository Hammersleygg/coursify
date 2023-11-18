import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchBar.css';
import Papa from 'papaparse';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [classData, setClassData] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);
    const navigate = useNavigate();

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
        navigate(`/class/${classInfo['Class Number']}`, {state: {selectedCourse: classInfo}});
    };

    const closePopup = () => {
        setSelectedClass(null);
    };

    return (
        <div className='search-container'>
            <div className="search-bar">
                <div className="input-button-container">
                <input type="text" placeholder="Search for a class (or type 'all' for every class)..." value={query} onChange={handleQueryChange}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()} />
                <button onClick={handleSearch}>Search</button>
            </div>
            {notFound ? (
                <p className={`not-found-message`}>Sorry, course not found....</p>
            ) : (
                results.length > 0 && (
                    <div search-results-container>
                    <ul className="search-results">
                        {results.map((classInfo, index) => (
                            <li key={index} onClick={() => handleClassClick(classInfo)}>
                                <p>Course Name: {classInfo['Class Name']}</p>
                                <p>Course Number: {classInfo['Class Number']}</p>
                            </li>
                        ))}
                    </ul>
                </div>
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
        </div>
    );
}
