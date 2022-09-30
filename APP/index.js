// Se llama la dependencia de mongoose
const mongoose = require("mongoose");

const mqtt = require('mqtt')

const client  = mqtt.connect('tcp://test.mosquitto.org')
const topic = '7C_EQUIPO1'

//Se llama al esquema a enviar
const { invInfo } = require("./Schemas/esquema");

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

//Se llama la conexión a la base de datos
require("../DB/db.js");

