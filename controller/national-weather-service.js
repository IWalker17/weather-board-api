import { getNationalWeatherServiceForecast } from '../service/national-weather-service.js';

export const getWeatherForecast = async (req, res, next) => {
    try {
        const street = req.body.street;
        const city = req.body.city;
        const state = req.body.state;
        const postalcode = req.body.postalcode;
        const country = req.body.country;

        const forecast = await getNationalWeatherServiceForecast(
            street,
            city,
            state,
            postalcode,
            country
        );

        res.send(forecast);
    } catch (error) {
        console.error(
            'Failed to get forecast. Passing error to express. Error: ',
            error
        );
        next(error);
    }
};
