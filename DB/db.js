//CONEXION A MONGOOSE DB
var mongoose = require("mongoose");

var user = "admin";
var pwd = "admin";

mongoose.Promise = global.Promise;
mongoose
  .connect(
    `mongodb+srv://${user}:${pwd}@cluster0.wa7ulrb.mongodb.net/invernaderos`
  )
  .then(() => {
    console.log("Conexión exitosa con la Base de Datos");
  })
  .catch((e) => {
    console.log("Error de conexión: " + e);
  });
