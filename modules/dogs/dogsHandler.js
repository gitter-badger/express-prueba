var dogs = {
  lista: function (req, res) {
    db
    .Dog
    .find()
    .exec( function (err, dogs) {
      if (err) {
        res.json(err);
      }

      res.render('lista', {title: 'Lista de Perros', dogs: dogs});
    });
  },
  agregar: {
    formulario: function (req, res) {
      res.render('new', {title: 'Crear Amigo-Dog'});
    },

    guardar: function (req, res) {
      var dog = req.body;

      var newDog = new db.Dog({
        name: dog.nombre,
        birthdate: dog.nacimiento
      });

      newDog.save(function (err, dog) {
        if (err) {
          res.json(err);
        }

        res.redirect('/dogs');
      });
    }
  }
}

module.exports = dogs;
