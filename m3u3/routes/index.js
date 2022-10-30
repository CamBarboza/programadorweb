var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async(req, res, next) =>{

  console.log(req.body)

  var nombre = req.body.nombre;
  var email = req.body.email;
  var servicio = req.body.servicio;
  var sucursal = req.body.sucursal;
  var fecha = req.body.fecha;
  var personas = req.body.personas; 
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'donabarboza2017@gmail.com',
    subject: 'CONTACATO WEB',
    html: nombre + "se contacto a traves de la web y quiere reservar el servicio de " + servicio + "en la sucursal de " + sucursal + ". La fecha elegida fue " + fecha + "y la cantidad de personas es" + personas + ". <br> Ademas, hizo este comentario: " + mensaje + ". <br> Para comunicarse, debe enviar un mail a la siguiente direccion:" + email
  }

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  });
  var info = await transport.sendMail(obj);

  res.render('contacto', {
    message: 'Mensaje enviado correctamente'
  });
});


module.exports = router;
