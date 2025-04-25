require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const IP_GEOLOCATION_API_KEY = process.env.IP_GEOLOCATION_API_KEY;
const WEATHERAPI_KEY = process.env.WEATHERAPI_KEY;

app.set('trust proxy', true);

app.get('/api/hello', async (req, res) => {
    const visitorName = req.query.visitor_name || 'Guest';
    let clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if ((clientIp === '::1') || clientIp === '127.0.0.1') {
        clientIp = '8.8.8.8';
    }
    try {
        const geoResponse = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${IP_GEOLOCATION_API_KEY}&ip=${clientIp}`);//Makes an asynchronous HTTP GET request to the IP Geolocation API, passing the API key and client IP as query parameters.
        const location = geoResponse.data.city || 'Unknown Location';

        
        const weatherResponse = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${WEATHERAPI_KEY}&q=${location}`);
        const temperature = weatherResponse.data.current.temp_c;

        const response = {
            client_ip: clientIp,
            location: location,
            greeting: `Hello, ${visitorName}!, the temperature in ${location} is ${temperature}°C`
        }

        res.setHeader('Content-type', 'application/json')
        res.send(JSON.stringify(response, null, 2))
    } catch (error) {
        console.error("Error fetching data:", error)
        if (error.response) {
            console.error('Response Status:', error.response.status)
            console.error('Response Data:', error.response.data)
        }

        res.status(500).json({ error: 'Internal Server Error', details: error.message })

    }
});

app.listen(port, () => {
    console.log(`Our Server is running on port ${port}`)
});