const request = require('request');

const forecastKey = 'cca179b1c0de3cea55b48944d9ed3376';

let getWeather = (latitude, longitude, callback) => {

    request({
        url: `https://api.darksky.net/forecast/${forecastKey}/${latitude},${longitude}`,
        json: true,
    }, (error, response, body) => {

        if (!error && response.statusCode === 200) {

            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
            });

        } else {
            callback('Unable to fetch weather.');
        }

    });

};

module.exports = {
    getWeather,
};