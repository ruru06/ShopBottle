
import React from 'react';

function Search({ handleSearch }) {
    return (
        <div className="search">
            <div className="form">
                <i className="fa-solid fa-magnifinf-glass"></i>
                <input type="text" className="search-input" onChange={handleSearch} placeholder="Search ..." />
                <button className='search-button'>Search</button>
            </div>
        </div>
    );
}

export default Search;
