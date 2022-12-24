var express = require('express');
var router = express.Router();
var reservasModel = require('./../../models/reservasModel');


/* GET home page. */
router.get('/', async function (req, res, next) {
  var reservas = await reservasModel.getReservas();
  res.render('admin/reservas', {
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

// agregar reservas
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

router.post('/agregar', async (req, res, next) => {
  try {
    if (req.body.nombre != "" && req.body.servicio != "" && req.body.sucursal != "" && req.body.horario != "" && req.body.fecha != "" && req.body.personas) {
      await reservasModel.insertReserva(req.body);
      res.redirect('/admin/reservas')
    } else {
      res.render('admin/reservas', {
        layout: 'admin/layout',
        error: true, message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/reservas', {
      layout: 'admin/layout',
      error: true, message: 'No se cargo la reserva'
    })
  }
})

router.get('/modificar/:id', async (req, res, next) => {
  let id = req.params.id;
  let reserva = await reservasModel.getReservasById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    reserva
  });
});

router.post('/modificar', async (req, res, next) => {
  try {
    let obj = {
      nombre: req.body.nombre,
      sucursal: req.body.sucursal,
      servicio: req.body.servicio,
      fecha: req.body.fecha,
      horario: req.body.horario,
      personas: req.body.personas,

    }
    console.log(obj)
    await reservasModel.modificarReservasById(obj, req.body.id);
    res.redirect('/admin/reservas');
  }
  catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true, message: 'No se modifico la reserva'
    })
  }
})

module.exports = router;