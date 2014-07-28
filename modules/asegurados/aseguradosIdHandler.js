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
      var aseguradoId = req.params.id
        , aseguradoForm = req.body;

      delete aseguradoForm.id;
      delete aseguradoForm._id;

      // separa la cadena de telefonos para almacenar en mongodb en forma de array
      aseguradoForm.telefonos = aseguradoForm.telefonos.split(", ");

      db
      .Asegurado
      .findByIdAndUpdate(aseguradoId, aseguradoForm, function (err, asegurado) {
        res.redirect('/asegurados');
      });
    }
  }
}

module.exports = aseguradosIdHandler;
