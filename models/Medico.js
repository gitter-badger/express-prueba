module.exports = function (mongoose) {
  var Schema = mongoose.Schema;

  var MedicoSchema = new Schema({
    nombres: String,
    apellidos: String,
    especialidades: Array,
    ci: Number,
    direccion: String,
    telefonos: Array,
    nacimiento: Date
  });

  MedicoSchema.methods.edad = function () {
    return ~~((Date.now() - this.nacimiento) / (31557600000));
  }

  return mongoose.model('Medico', MedicoSchema);
}
