// models/SignoVital.js
const mongoose = require('mongoose');

const SignoVitalSchema = new mongoose.Schema({
  usuario_id: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,       // Cambiado de String a Date para guardar fecha + hora
    required: true,
    default: Date.now // Si no se envía fecha, toma la fecha y hora actual
  },
  frecuencia_cardiaca: {
    type: Number,
    default: null
  },
  presion_arterial: {
    type: String,
    default: null
  },
  temperatura: {
    type: Number,
    default: null
  },
  saturacion_oxigeno: {
    type: Number,
    default: null
  },
  frecuencia_respiratoria: {
    type: Number,
    default: null
  }
});

module.exports = mongoose.model('SignoVital', SignoVitalSchema);

