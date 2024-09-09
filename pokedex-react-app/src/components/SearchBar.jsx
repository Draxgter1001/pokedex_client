import React, { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar({ onSearch, error }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchBy, setSearchBy] = useState('name');

    const handleSearch = () => {
        onSearch(searchTerm, searchBy);
    };

    return (
        <div className='search-bar-container'>
            <div className='search-bar'>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search Pokémon"
                    className='search-input'
                />
                <select 
                    value={searchBy} 
                    onChange={(e) => setSearchBy(e.target.value)}
                    className='search-select'
                >
                    <option value="name">Name</option>
                    <option value="type">Type</option>
                    <option value="evolution">Evolution</option>
                </select>
                <button onClick={handleSearch} className='search-button'>Search</button>
            </div>
            {error && <div className='error-message'>{error}</div>}
        </div>
    );
}

export default SearchBar;