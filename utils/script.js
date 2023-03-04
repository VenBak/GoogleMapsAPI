// Links to get API key
// https://serpapi.com/integrations/node
// https://rapidapi.com/googlecloud/api/google-maps-geocoding/

// Make sure to have .env file within same folder with your keys under this notation:
// GEO_KEY="1217d0bcebmshcbd8------------------------------"
// QUERY_KEY="68f67282a5a40f91652e0--------------------------"

// Run the file in your terminal node script.js
// Look at the response

const SerpApi = require('google-search-results-nodejs');
const axios = require("axios")

// coords format: "@40.7455096,-74.0083012,14z"

// Zip test trial

// String which will be passed as the input into the query function
const formattedCoords = '@'

var query = function (coords) {

    const search = new SerpApi.GoogleSearch("68f67282a5a40f91652e092ba4da13bf9a9ad68782877c9585560f57ac8f6796");

    const params = {
        engine: "google_maps",
        type: "search",
        google_domain: "google.com",
        q: "Park",
        hl: "en",
        ll: coords
    };

    const callback = function(data) {
        console.log(data);
    };

    // Show result as JSON
    return search.json(params, callback);
}


var geocode = function (zip) {
    const zipformat = JSON.parse(zip)

    const options = {
    method: 'GET',
    url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
    params: {address: `${zipformat}`, language: 'en'},
    headers: {
        'X-RapidAPI-Key': "1217d0bcebmshcbd829e1209796dp1ae038jsn51ab912ba0c0",
        'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {

        let lat = JSON.stringify(response.data.results[0].geometry.location.lat)
        let long = JSON.stringify(response.data.results[0].geometry.location.lng)

        let result = formattedCoords.concat(lat, ", ", long, ",14z")

        query(result)

    }).catch(function (error) {
        console.error(error);
    });
}

// let zip = '20007'

// geocode(zip)

module.exports = geocode