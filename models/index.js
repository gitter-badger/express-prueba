if (!global.hasOwnProperty('db')) {
  var mongoose = require('mongoose');

  var dbName = 'dogs';

  mongoose.connect('mongodb://localhost:27017/' + dbName);

  global.db = {
    mongoose: mongoose,
    Dog: require('./Dog')(mongoose),
  };
}

module.exports = global.db;