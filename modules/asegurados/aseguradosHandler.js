var aseguradosHandler = {
  lista: function (req, res) {
    db
    .Asegurado
    .find()
    .exec(function (err, asegurados) {
      res.render('asegurados/lista', {title: 'Lista de Asegurados', asegurados: asegurados});
    });
  },
  agregar: {
    formulario: function (req, res) {
      res.render('asegurados/new', {title: 'Nuevo Asegurado'});
    },

    guardar: function (req, res) {
      var aseguradoForm = req.body;

      var newAsegurado = new db.Asegurado({
        nombres: aseguradoForm.nombres,
        apellidos: aseguradoForm.apellidos,
        ci: aseguradoForm.ci,
        direccion: aseguradoForm.direccion,
        telefonos: aseguradoForm.telefonos.split(", "),
        nacimiento: moment(aseguradoForm.nacimiento).format('LL')
      });
    }
  }
}

module.exports = aseguradosHandler;
