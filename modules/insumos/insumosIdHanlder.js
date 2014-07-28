var insumos = {
  ver : function(req, res){
    var id = req.params.id;
    db
    .Insumo
    .find({_id:id})
    .exec(function(err, insumo){
      if (err){
          res.json(err);
        }
      res.render('insumos/ver', {title:'Ver insumo', insumo:insumo[0]})
    })
  },
  edit:function(req, res){

  }

}

module.exports = insumos;
