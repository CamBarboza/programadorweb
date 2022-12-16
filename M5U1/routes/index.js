var express = require('express');
var router = express.Router();
var reservasModel = require('../models/reservasModel');
var testimoniosModel = require('../models/testimoniosModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', async function (req, res, next) {
  var testimonios = await testimoniosModel.getTestimonios();
  res.render('/index' , {
    // layout: 'admin/login',
    // usuario: req.session.nombre,
      testimonios
  });
  
});

router.get('/', async function(req, res, next){
  reservas = await reservasModel.getReservas();
  reservas = reservas.splice(0,5);
  res.render('index', {
    reservas
  });
});

module.exports = router;
