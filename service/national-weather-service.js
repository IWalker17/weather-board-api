import { getCoordinates } from '../broker/geocode.js';
import {
    getPointData,
    getWeatherForecast,
} from '../broker/national-weather-service.js';
import { mapNationalWeatherServiceForecast } from '../utils/mapper.js';

export const getNationalWeatherServiceForecast = async (
    street,
    city,
    state,
    postalcode,
    country
) => {
    const coordinates = await getCoordinates(
        street,
        city,
        state,
        postalcode,
        country
    );
    const pointData = await getPointData(
        coordinates.latitude,
        coordinates.longitude
    );
    const forecast = await getWeatherForecast(
        pointData.wfo,
        pointData.x,
        pointData.y
    );
    const mappedForecast = mapNationalWeatherServiceForecast(forecast);
    return mappedForecast;
};
