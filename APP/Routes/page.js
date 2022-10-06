var router = require('express').Router()
var path = require('path')

router.get('/', function (req, res) {
    res.sendFile('desktop___1.html', { root: path.join(__dirname, '../') });
});

module.exports=router
