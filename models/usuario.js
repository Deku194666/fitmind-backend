const mongoose = require('mongoose');    // Modelo de la BD

const { Schema } = mongoose;

const schemaUsuario = new Schema({
  email: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true }
});

module.exports = mongoose.model('Usuario', schemaUsuario);



