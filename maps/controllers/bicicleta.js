var bicicleta = require('../models/bicicleta');


exports.bicicleta_list = function(req,res){

    res.render('bicicletas/index', {bicis: bicicleta.allbicis});
}

exports.bicicleta_create_get = function(req, res){

    res.render('bicicletas/create');
}

exports.bicicleta_create_post = function(req, res){

    var bici = new bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.lng ];
    bicicleta.add(bici);

    res.redirect('/bicicletas');
}


//

exports.bicicleta_update_get = function(req, res){

    var bici = bicicleta.findById(req.params.id);
    res.render('bicicletas/update', {bici});
}


exports.bicicleta_update_post = function(req, res){

    var bici = bicicleta.findById(req.params.id);
    bici.id = req.body.id;
    bici.color = req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [req.body.lat, req.body.lng ];

    res.redirect('/bicicletas');
}



exports.bicicleta_delete_post = function(req, res) { 

    bicicleta.removeById(req.body.id);

    res.redirect('/bicicletas');
}