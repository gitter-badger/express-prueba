module.exports = function (mongoose) {
  var Schema = mongoose.Schema;

  var DogSchema = new Schema({
    name: String,
    birthdate: Date
  });

  DogSchema.methods.age = function () {
    return ~~((Date.now() - this.birthdate) / (31557600000));
  }

  return mongoose.model('Dog', DogSchema);
}
