var medicosHandler = {
  lista: function (req, res) {
    db
    .Medico
    .find()
    .exec(function (err, medicosList){
      if (err) { res.json(err) }

      res.render('medicos/lista', {
        title: 'Listado de Médicos',
        medicos: medicosList
      });
    });
  },

  nuevo: {
    formulario: function (req, res) {
      res.render('medicos/new', {
        title: 'Nuevo Médico'
      });
    },

    guardar: function (req, res) {
      var formulario = req.body;

      var nuevoMedico = new db.Medico({
        nombres: formulario.nombres,
        apellidos: formulario.apellidos,
        especialidades: formulario.especialidades.split(', '),
        ci: formulario.ci,
        direccion: formulario.direccion,
        telefonos: formulario.telefonos.split(', '),
        nacimiento: formulario.nacimiento
      });

      nuevoMedico.save( function (err, medico) {
        if (err) { res.json(err); }

        res.redirect('/medicos');
      });
    }
  }
}


module.exports = medicosHandler;
