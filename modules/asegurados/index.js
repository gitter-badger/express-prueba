var express = require('express'),
    router = module.exports = express.Router();

// Recurso Asegurados
aseguradosHandler = require('./aseguradosHandler');
router.get('/', aseguradosHandler.lista); // listado
router.get('/new', aseguradosHandler.agregar.formulario); // formulario de agregar
router.post('/', aseguradosHandler.agregar.guardar); // procesa nuevo item

// Recurso Asegurados/:id
aseguradosIdHandler = require('./aseguradosIdHandler');
router.get('/:id', aseguradosIdHandler.ver) // ver
// router.get('/:id/edit', aseguradosIdHandler.editar.formulario) // editar formulario
// router.put('/:id', aseguradosIdHandler.editar.guardar) // editar guardar
// router.get('/:id/delete', aseguradosIdHandler.eliminar) // eliminar
