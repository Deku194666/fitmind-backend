

const mongoose = require('mongoose');

const MusculacionSchema = new mongoose.Schema({
  usuario_id: { type: String, required: true },

  tiempo: {
    type: Number,
    required: true // segundos
  },

  calorias: {
    type: Number,
    required: true
  },

  notas: {
    type: String,
    default: ''
  },

  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Musculacion', MusculacionSchema);
