// Declare router
const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api')

router.use('/', homeRoutes);

module.exports = router;