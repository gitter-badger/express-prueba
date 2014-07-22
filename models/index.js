if (!global.hasOwnProperty('db')) {
  var mongoose = require('mongoose');

  var dbName = 'fonsafan';

  mongoose.connect('mongodb://localhost:27017/' + dbName);

  global.db = {
    mongoose: mongoose,
    Dog: require('./Dog')(mongoose),
    Asegurado: require('./Asegurado')(mongoose),
    Insumo: require('./Insumo')(mongoose),
  };
}

module.exports = global.db;
