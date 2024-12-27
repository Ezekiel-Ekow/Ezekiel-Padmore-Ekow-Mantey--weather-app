import React from 'react';

const ForecastList = ({ forecast }) => {
    if (!forecast) return null;

    return (
        <div className="forecast-list">
            <h3>5-Day Forecast</h3>
            {forecast.list.map((item, index) => (
                <div key={index} className="forecast-item">
                    <p>{item.dt_txt}</p>
                    <p>{item.weather[0].description}</p>
                    <p>Temp: {item.main.temp}°C</p>
                </div>
            ))}
        </div>
    );
};

export default ForecastList;
