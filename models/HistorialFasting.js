


// models/HistorialFasting.js
const mongoose = require("mongoose");

const historialFastingSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  duration: {
    type: Number, // duración en horas o milisegundos según quieras
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("HistorialFasting", historialFastingSchema);