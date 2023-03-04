const router = require('express').Router();
const SerpApi = require('google-search-results-nodejs');
const axios = require("axios")
require('dotenv').config();

router.get('/', (req, res) => {
    // Let the client know that their request was received
    res.sendFile(path.join(__dirname, '/public/index.html'))

});


router.get('/results/:zip',  async (req, res) => {
    
    const zip = req.params.zip
    // console.log(process.env)

    // console.log(req.params.zip)


        // console.log(req.body.zip)

        // geocode(req.body.zip)

        

        // const data = res.json(fn)

        // res.send(data)

    const formattedCoords = '@'

    var query = function (coords) {

        const search = new SerpApi.GoogleSearch(process.env.QUERY_KEY);

        const params = {
            engine: "google_maps",
            type: "search",
            google_domain: "google.com",
            q: "Park",
            hl: "en",
            ll: coords
        };

        const callback = function(data) {
            // console.log(data);
            res.json(data)
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
            'X-RapidAPI-Key': process.env.GEO_KEY,
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

    geocode(zip)

});



module.exports = router;

