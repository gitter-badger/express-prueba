var express = require('express'),
    router = module.exports = express.Router();


var insumosHandler = require('./insumosHandler');
var insumosid = require('./insumosid')

router.get('/',insumosHandler.lista);
router.get('/new' , insumosHandler.nuevo)
router.post('/' , insumosHandler.guardar)

router.get('/:id', insumosid.ver)
