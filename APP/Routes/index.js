var router = require('express').Router()

var page = require('./page')
router.use('/', page)

var invernadero = require('./invernadero')
router.use('/invernadero', invernadero)
 
router.get('/', function (req, res) {
  res.status(200).json({ message: 'Conectado a la cabecera principal' })
})

//localhost:1339/api
module.exports = router