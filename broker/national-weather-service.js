import { mapPointData } from '../utils/mapper.js';
import { toJSON } from '../utils/parse.js';

/**
 *
 * @description Returns raw numerical forecast data for a 2.5km grid area
 * @param {string} wfo - Three-letter identifier for a National Weather Sevice office.
 * @param {number} x - Forecast grid X coordinate
 * @param {number} y - Forecast grid Y coordinate
 * @returns {Object} GridpointForecastGeoJson
 */
export const getWeatherForecast = async (wfo, x, y) => {
    const url = `https://api.weather.gov/gridpoints/${wfo}/${x},${y}/forecast?units=us`;
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/geo+json',
            'User-Agent': 'testUserAgent',
        },
    };
    const response = await fetch(url, options);
    const forecast = await toJSON(response.body);
    return forecast;
};

/**
 *
 * @description - Returns metadata about a give latitude/longtitude point
 * @param {number} lat - Latitude (four decimal places)
 * @param {number} long - Longtitude (four decimal places)
 */
export const getPointData = async (lat, long) => {
    const url = `https://api.weather.gov/points/${lat},${long}`;
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/geo+json',
            'User-Agent': 'testUserAgent',
        },
    };
    const response = await fetch(url, options);
    const pointData = await toJSON(response.body);
    const gridPointData = mapPointData(pointData);
    return gridPointData;
};
