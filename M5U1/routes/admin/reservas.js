var express = require('express');
var router = express.Router();
var reservasModel = require('./../../models/reservasModel');


/* GET home page. */
router.get('/', async function (req, res, next) {
  var reservas = await reservasModel.getReservas();
  res.render('admin/reservas' , {
    layout: 'admin/layout',
    usuario: req.session.nombre,
      reservas
  });
  
});

//eliminar por ID
router.get('/eliminar/:id', async (req, res, next) => {
  const id = req.params.id;
  await reservasModel.deleteReservasById(id);
  res.redirect("/admin/reservas");
});





module.exports = router;