require('dotenv').config()

const SerpApi = require('google-search-results-nodejs');

// coords format: "@40.7455096,-74.0083012,14z"

var coords = "@40.7455096,-74.0083012,14z";




function query(coords) {

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
  console.log(data);
};

// Show result as JSON
search.json(params, callback);

}

query(coords)