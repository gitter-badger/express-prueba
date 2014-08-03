var express = require('express'),
    router = module.exports = express.Router();


var insumosHandler = require('./insumosHandler');
router.get('/',insumosHandler.lista);
router.get('/new' , insumosHandler.nuevo);
router.post('/' , insumosHandler.guardar);


var insumosIdHandler = require('./insumosIdHandler');
router.get('/:id', insumosIdHandler.ver);
router.get('/:id/edit', insumosIdHandler.editForm);
router.put('/:id', insumosIdHandler.editSave);
router.get('/:id/delete', insumosIdHandler.delete);
