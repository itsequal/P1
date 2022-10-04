// Archivo donde van las rutas del servidor
var InvController=require('../Controllers/InvController');
var router = require('express').Router()


router.get('/', function(req, res){
  InvController.list(req,res);
})


router.post('/', function(req, res) {
  InvController.create(req,res);
})


//url:puerto/api/invernadero
module.exports = router