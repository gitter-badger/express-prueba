var dogsId = {
  ver: function (req, res) {
    var dogId = req.params.id;

    db
    .Dog
    .find({_id: dogId})
    .exec( function (err, dog) {
      if (err) {
        res.json(err);
      }

      res.render('dogs/ver', {title: 'Ver Perro', dog: dog[0]});
    });
  },

  editar: {
    formulario: function (req, res) {
      var dogId = req.params.id;

      db
      .Dog
      .findById(dogId, function (err, dog) {
        if (err) {
          res.json(err);
        }
        res.render('dogs/edit', {title: 'Editar Perro', dog: dog});
      });
    },

    guardar: function (req, res) {
        var dog = req.body,
            dogId = req.params.id;

        delete dog.id;
        delete dog._id;

        db
        .Dog
        .findByIdAndUpdate(dogId, dog, function (err, dog) {
          if (err) {
            res.json(err);
          }

          res.redirect('/dogs');
        });
    }
  },

  eliminar: function (req, res) {
    var dogId = req.params.id;

    db
    .Dog
    .findByIdAndRemove(dogId, function (err, dog) {
      if (err) {
        res.json(err);
      }

      res.redirect('/dogs');
    });
  }
}

module.exports = dogsId;
