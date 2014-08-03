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

  }
}

module.exports = medicosIdHandler;
