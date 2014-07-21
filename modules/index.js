var express = require('express'),
    router = module.exports = express.Router();

router.use('/dogs', require('./dogs'));

// hola
