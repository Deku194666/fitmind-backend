// models/Alimentos.js
const mongoose = require('mongoose');

const AlimentoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, index: true },
  categoria: { type: String, default: '' },
  calorias: { type: mongoose.Schema.Types.Mixed, default: 0 },
  proteinas: { type: mongoose.Schema.Types.Mixed, default: 0 },
  grasas: { type: mongoose.Schema.Types.Mixed, default: 0 },
  carbohidratos: { type: mongoose.Schema.Types.Mixed, default: 0 },
  fibra: { type: mongoose.Schema.Types.Mixed, default: 0 },
  porcion: { type: String, default: '' },
}, { collection: 'Alimentos' }); // <- usa el NOMBRE EXACTO que tenga tu colección

module.exports = mongoose.model('Alimento', AlimentoSchema);

