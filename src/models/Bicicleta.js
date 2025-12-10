


const mongoose = require('mongoose');

const BicicletaSchema = new mongoose.Schema({
  usuario_id: { type: String, required: true },
  tiempo: { type: Number, required: true },     // tiempo en segundos
  calorias: { type: String, required: true },   // calorías en formato string (ej: "123.45")
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bicicleta', BicicletaSchema);
