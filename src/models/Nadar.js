


const mongoose = require('mongoose');

const nadarSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Nadar', nadarSchema);
