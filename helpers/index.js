var hbs = require('hbs');


hbs.registerHelper('enlace', function (text, url) {
  return "hola " + text;
});
