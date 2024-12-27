const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const API_KEY = process.env.WEATHER_API_KEY;

app.get("/api/weather", async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: "City is required" });
    }

    try {
        console.log(`Fetching weather for city: ${city}`);
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather`,
            {
                params: {
                    q: city,
                    appid: API_KEY,
                    units: "metric",
                },
            }
        );
        console.log("Weather data received:", response.data);
        res.json(response.data);
    } catch (error) {
        if (error.response) {
            console.error("OpenWeatherMap API Error:", error.response.data);
            if (error.response.status === 404) {
                return res.status(404).json({ error: "City not found" });
            }
        } else {
            console.error("Server Error:", error.message);
        }
        res.status(500).json({ error: "Error fetching weather data" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
