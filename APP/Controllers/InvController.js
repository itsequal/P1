const { default: mongoose } = require('mongoose');
let {invInfo} = require('../Schemas/esquema');

module.exports = {
   create: function(req,res) {
      var invernadero = new invInfo(req.body)
      invernadero.save(function(err, datos){
         if(err){
            return res.status(500).json({ 
               message: 'Error al guardar la datos', 
               error: err
            })
         }

         return res.status(200).json({
            message: 'Se guardó correctamente la información la datos',
         })
      })
   },

   
   list: function(req, res) {
      invInfo.find(function(err, datos){
        if(err) {
          return res.status(500).json({
            message: 'Error obteniendo los datos'
          })
        }
        return res.json(datos)
      })
   },
}
