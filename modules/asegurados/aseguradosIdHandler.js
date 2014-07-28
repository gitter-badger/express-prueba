var aseguradosIdHandler = {
  ver: function (req, res) {
    var aseguradoId = req.params.id;

    db
    .Asegurado
    .findById(aseguradoId, function (err, asegurado) {
      if (err) { res.json(err); }

      res.render('asegurados/ver', {
        title: 'Informacion del Asegurado',
        asegurado: asegurado
      });
    });
  },

  editar: {
    formulario: function (req, res) {
      var aseguradoId = req.params.id;

      db
      .Asegurado
      .findById(aseguradoId, function (err, asegurado) {
        if (err) { res.json(err); }

        res.render('asegurados/edit', {
          title: 'Editar Asegurado',
          asegurado: asegurado
        });
      });
    },

    guardar: function (req, res) {

    }
  }
}

module.exports = aseguradosIdHandler;
