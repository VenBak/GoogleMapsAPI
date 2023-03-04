require('dotenv').config()

const axios = require("axios");
var zip = 20007

const formattedCoords = '@'

function Geocoder(zip) {
    const options = {
    method: 'GET',
    url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
    params: {address: `${zip}`, language: 'en'},
    headers: {
        'X-RapidAPI-Key': process.env.GEO_KEY,
        'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {

        let lat = JSON.stringify(response.data.results[0].geometry.location.lat)
        let long = JSON.stringify(response.data.results[0].geometry.location.lng)

        // formattedCoords.concat(lat, ', ', long)

        console.log(lat)
        console.log(long)


        let result = formattedCoords.concat(lat, ", ", long)
        console.log(result)

    }).catch(function (error) {
        console.error(error);
    });
}

Geocoder(zip)