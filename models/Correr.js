


// models/Correr.js
const mongoose = require('mongoose');

const correrSchema = new mongoose.Schema({
  usuario_id: { type: String, required: true },
  tiempo: { type: Number, required: true }, // en segundos
  calorias: { type: Number, required: true },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Correr', correrSchema);
