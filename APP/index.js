// Se llama la dependencia de mongoose
const mongoose = require("mongoose");

const mqtt = require('mqtt')

const client  = mqtt.connect('tcp://test.mosquitto.org')
const topic = '7C_EQUIPO1'

//Se llama al esquema a enviar
const { invInfo } = require("./Schemas/esquema");


var express = require('express')
var app = express()       
var cors=require('cors');
var bodyParser = require('body-parser')        

var port = process.env.PORT || 1339
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())            
 
// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
var router = require('./routes/index')

app.use('/api', router)
app.use(express.static(__dirname));

//Se hace la conexión MQTT
client.on('connect', () => {
  console.log('Connected')
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
  })
})

client.on('message', function (topic, message) {
  console.log(message.toString())
  const info = JSON.parse(message.toString())
  var newInvernadero = new invInfo(info)
  newInvernadero.save();
})

//Comienza el servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)

//Se llama la conexión a la base de datos
require("../DB/db.js");