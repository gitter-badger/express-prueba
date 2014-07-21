var aseguradosHandler = {
  lista: function (req, res) {
    res.render('asegurados/lista', {title: 'Lista de Perros', dogs: 'hola'});
  }
}

module.exports = aseguradosHandler;
