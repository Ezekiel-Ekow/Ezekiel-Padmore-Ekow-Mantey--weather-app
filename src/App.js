
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastList from './components/ForecastList';
import './App.css';

const App = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const fetchWeather = async () => {
        try {
            const weatherResponse = await fetch(
                `http://localhost:5000/api/weather?city=${city}`
            );
            const weatherData = await weatherResponse.json();
            setWeather(weatherData);

            const forecastResponse = await fetch(
                `http://localhost:5000/api/forecast?city=${city}`
            );
            const forecastData = await forecastResponse.json();
            setForecast(forecastData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div className="app">
            <h1>Weather App</h1>
            <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
            <WeatherCard weather={weather} />
            <ForecastList forecast={forecast} />
        </div>
    );
};

export default App;