const mongoose = require('mongoose');

const MusculacionSchema = new mongoose.Schema({
<<<<<<< HEAD
  usuario_id: {
    type: String,
    required: true
  },

  tiempo: {
    type: Number,
    required: true
=======
  usuario_id: { type: String, required: true },

  tiempo: {
    type: Number,
    required: true // segundos
>>>>>>> 6e1ee9e3f93555d4e752418bd080795ae0a362f6
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
<<<<<<< HEAD
    default: Date.now   // ⬅️ CLAVE
=======
    default: Date.now
>>>>>>> 6e1ee9e3f93555d4e752418bd080795ae0a362f6
  }
});

module.exports = mongoose.model('Musculacion', MusculacionSchema);
