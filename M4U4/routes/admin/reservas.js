var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('/admin/reservas')
//     layout: 'admin/login',
//     usuario: req.session.nombre,
//   });
});



module.exports = router;