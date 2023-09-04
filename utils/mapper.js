export const mapPointData = (pointData) => {
    return {
        wfo: pointData.properties.gridId,
        x: pointData.properties.gridX,
        y: pointData.properties.gridY,
    };
};

export const mapCoordinates = (response) => {
    const latLongList = response.map((item) => {
        return {
            latitude: Number.parseFloat(item.lat).toFixed(4),
            longitude: Number.parseFloat(item.lon).toFixed(4),
        };
    });
    // TODO: handle multiple coordinates. maybe average the ones that are different.
    return latLongList[0];
};

export const mapNationalWeatherServiceForecast = (
    nationalWeatherServiceForecast
) => {
    return nationalWeatherServiceForecast.properties.periods.map((period) => {
        return period;
    });
};
