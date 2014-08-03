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
  editForm:function(req, res){
    var id = req.params.id;
    db
    .Insumo
    .findById(id,function(err, insumo){
      if (err){
        res.json(err);
      }
      res.render('insumos/edit', {title: 'Editando insumo', insumo:insumo})
    })

  },
  editSave:function(req,res){
    var id = req.params.id;
    var body = req.body;
    delete body.id;
    delete body._id;
    db
    .Insumo
    .findByIdAndUpdate(id, body, function(err, insumo){
      if(err){
        res,json(err)
      }
    res.redirect('/insumos')
    })
  },
  delete:function(req,res){
    var id = req.params.id;
    db
    .Insumo
    .findByIdAndRemove(id,function(err,insumo){
      if(err){
        res,json(err)
      }
      res.redirect('/insumos')

    })
  }

}

module.exports = insumos;
