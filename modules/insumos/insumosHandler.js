var insumos = {
    lista : function(req, res){
        db
        .Insumo
        .find()
        exec( function(err, insumos){
            if (err){
                res.json(err);
            }
            res.render('insumos/lista', {title:'Lista de Insumos', insumos:insumos})
        })
    },
    nuevo : function(req, res){
        res.render('insumos/new', {title: 'Agregar nuevo insumo'});
    },
    guardar : function(req, res){
        var insumo = req.body

        var newInsumo = new db.Insumo({
            descripcion : Insumo.descripcion,
            unidad : Insumo.unidad,
            cantidad: Insumo.cantidad,
            cantMin: Insumo.cantMin,

        })

    }



}

module.exports = insumos;
