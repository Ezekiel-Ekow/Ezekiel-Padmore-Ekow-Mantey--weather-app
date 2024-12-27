import React from 'react';

const SearchBar = ({ city, setCity, fetchWeather }) => {
    return (
        <div className="search">
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchWeather}>Get Weather</button>
        </div>
    );
};

export default SearchBar;
