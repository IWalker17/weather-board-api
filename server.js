import express from 'express';
import bodyParser from 'body-parser';
import { getWeatherForecast } from './controller/national-weather-service.js';

const app = express();
const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.post('/api/nws', jsonParser, getWeatherForecast);

app.listen(5555, () => {
    console.log('Listening at localhost:5555');
});
