var express = require('express');
var router = express.Router();
var reservasModel = require('../../models/reservasModel');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/index', {
    layout: 'admin/layout',
  });
});

router.get('/', async function(req, res, next){
    reservas = await reservasModel.getReservas();
    reservas = reservas.splice(0,5);
    res.render('admin/index',{
        reservas
    });
});

module.exports = router;