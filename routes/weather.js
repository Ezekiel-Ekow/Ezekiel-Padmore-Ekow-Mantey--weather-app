const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

const API_KEY = process.env.WEATHER_API_KEY;

// Route to fetch current weather data
router.get('/weather', async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: 'City is required.' });
    }

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data.' });
    }
});

// Route to fetch 5-day weather forecast
router.get('/forecast', async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: 'City is required.' });
    }

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch forecast data.' });
    }
});

module.exports = router;
