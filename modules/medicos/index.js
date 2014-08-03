var express = require('express');
var router = module.exports = express.Router();

var medicosHandler = require('./medicosHandler');
router.get('/', medicosHandler.lista);
router.get('/new', medicosHandler.nuevo.formulario);
router.post('/', medicosHandler.nuevo.guardar);


var medicosIdHandler = require('./medicosIdHandler');
router.get('/:id', medicosIdHandler.view); //ver
// router.get('/:id/edit', medicosIdHandler.edit.form); //editar formulario
// router.put('/:id', medicosIdHandler.edit.save); //editar guardar
// router.get('/:id/delete', medicosIdHandler.del)//eliminar
