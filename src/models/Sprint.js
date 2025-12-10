

// models/SprintModel.js
const mongoose = require('mongoose');

const SprintSchema = new mongoose.Schema({
  usuario_id: {
    type: String,
    required: true,
  },
  tiempo: {
    type: Number, // en segundos
    required: true,
  },
  calorias: {
    type: Number,
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Sprint', SprintSchema);
