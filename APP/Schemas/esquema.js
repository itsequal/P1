//Se llama la dependencia de mongoose
var mongoose = require("mongoose");

//Esquema JSON que vamos a usar
const mqttSchema = new mongoose.Schema({
  equipo: String,
  temperatura: String,
});

//Se crea el modelo especificando el nombre de la colección y el nombre del esquema y se exporta
const invInfo = mongoose.model("invernadero1", mqttSchema);
module.exports = { invInfo };
