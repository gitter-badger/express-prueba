module.exports = function (mongoose) {
  var Schema = mongoose.Schema;

  var AseguradoSchema = new Schema({
    nombres: String,
    apellidos: String,
    ci: Number,
    direccion: String,
    telefonos: String,
    nacimiento: Date
  });

  AseguradoSchema.methods.age = function () {
    return ~~((Date.now() - this.nacimiento) / (31557600000));
  }

  return mongoose.model('Asegurado', AseguradoSchema);
}
