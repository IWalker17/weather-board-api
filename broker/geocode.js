import { mapCoordinates } from '../utils/mapper.js';
import { toJSON } from '../utils/parse.js';

/**
 *
 * @description - Returns Latitude and Longitude coordinates for given address
 * @param {string} street
 * @param {string} city
 * @param {string} state
 * @param {string} postalcode
 * @param {string} country
 * @returns {Object}
 */
export const getCoordinates = async (
    street,
    city,
    state,
    postalcode,
    country
) => {
    const formattedStreet = street.replaceAll(' ', '+');
    const formattedCity = city.replaceAll(' ', '+');
    const formattedState = state.replaceAll(' ', '+');
    const formattedPostalcode = postalcode.replaceAll(' ', '+');
    const formattedCountry = country.replaceAll(' ', '+');

    const url = `https://geocode.maps.co/search?street=${formattedStreet}&city=${formattedCity}&state=${formattedState}&postalcode=${formattedPostalcode}&country=${formattedCountry}`;
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    };
    const response = await fetch(url, options);
    const jsonData = await toJSON(response.body);
    const coordinates = mapCoordinates(jsonData);
    return coordinates;
};
