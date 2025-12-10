

// models/Hidratacion.js
const mongoose = require('mongoose');

const HidratacionSchema = new mongoose.Schema({
  usuario_id: { type: String, required: true },
  cantidad_ml: { type: Number, required: true },
  fecha: { type: Date, required: true, default: Date.now } // fecha y hora exacta
});

module.exports = mongoose.model('Hidratacion', HidratacionSchema);
