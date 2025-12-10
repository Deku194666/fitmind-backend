"use strict";

// Para conectar mongo con node.js
var mongoose = require('mongoose'); // Importo la libreria Moongose q sirve para conectar node.js con mongo


var URI = 'mongodb://localhost:27017/Tarea'; // A donde me conecto, es la dire de la BD. Define la URI (direccion de conexion ) a mongo. 

mongoose.connect(URI) // Establece la conexion con la base de datos la URI 
// Esto Maneja la respuesta de la conexion; exitosa o fallida  
.then(function () {
  return console.log('Conectado a MongoDB - Base de Datos - Tarea');
})["catch"](function (err) {
  return console.error('Error al Conectar a MongoDB:', err);
});
module.exports = mongoose; // Expporta el objeto moongose, y asi poder usarlo en otros archivos del proyecto