var medicosIdHandler = {
  view: function (req, res) {
    var id = req.params.id;

    db
    .Medico
    .findById(id, function (err, medicoRow) {
      if (err) { res.json(err); }

      res.render('medicos/view', {
        title: 'Detalles del Medico',
        medico: medicoRow
      });
    });

  },

  edit: {
    form: function (req, res) {
      var medicoId = req.params.id;

      db
      .Medico
      .findById(medicoId, function (err, medicoRow) {
        if (err) { res.json(err); }

        res.render('medicos/edit', {
          title: 'Edición de médico',
          medico: medicoRow
        });
      });
    },

    save: function (req, res) {
      var medicoId = req.params.id;
      var formulario = req.body;

      delete formulario._id;
      delete formulario.id;

      formulario.especialidades = formulario.especialidades.split(', ');

      db
      .Medico
      .findByIdAndUpdate(medicoId, formulario, function (err, medico) {
        if (err) { res.json(err); }

        res.redirect('/medicos');
      })
    }
  },

  del: function (req, res) {
    var medicoId = req.params.id;

    db
    .Medico
    .findByIdAndRemove(medicoId, function (err, medico) {
      if (err) { res.json(err); }

      res.redirect('/medicos');
    });
  }
}

module.exports = medicosIdHandler;
