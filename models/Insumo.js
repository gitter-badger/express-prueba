module.exports = function(mongoose){
    var Schema = mongoose.Schema;

    var InsumoSchema = new Schema({
        descripcion: String,
        unidad: Number,
        cantidad: Number,
        cantMin: Number,

    })
    return mongoose.model('Insumo', InsumoSchema)
}
