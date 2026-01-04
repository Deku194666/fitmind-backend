

const mongoose = require('mongoose');

const yogaSchema = new mongoose.Schema({
  usuario_id: { type: String, required: true },
  tiempo: { type: Number, required: true },
  calorias: { type: Number, required: true },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Yoga', yogaSchema);


