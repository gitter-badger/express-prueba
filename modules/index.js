var express = require('express'),
    router = module.exports = express.Router();

router.use('/dogs', require('./dogs'));
<<<<<<< Updated upstream
router.use('/asegurados', require('./asegurados'));
// router.use('/medicos', require('./medicos'));
=======
// router.use('/asegurados', require('./asegurados'));
// router.use('/medicos', require('./medicos'));
router.use('/insumos', require('./insumos'))
>>>>>>> Stashed changes
