const mongoose = require('mongoose');

const ingredienteSchema = new mongoose.Schema({
  alimentoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alimento',
    required: true
  },
  nombre: String,
  porcion: Number,
  calorias: Number,
  proteinas: Number,
  carbos: Number,
  grasas: Number,
  fibra: Number
});

const comidaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },

  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },

  ingredientes: [ingredienteSchema],

  totales: {
    calorias: Number,
    proteinas: Number,
    carbos: Number,
    grasas: Number,
    fibra: Number
  }

}, {
  timestamps: true
});

module.exports = mongoose.model('Comida', comidaSchema);