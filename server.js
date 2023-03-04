const path = require('path');
const express = require('express');
const axios = require("axios");
const SerpApi = require('google-search-results-nodejs');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3009;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes'));
app.use(cors())


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });