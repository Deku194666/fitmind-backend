const mongoose = require('mongoose');

const AlimentoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  cantidad: { type: Number, default: 1 },
  calorias: { type: Number, default: 0 },
  proteinas: { type: Number, default: 0 },
  grasas: { type: Number, default: 0 },
  carbohidratos: { type: Number, default: 0 },
  fibra: { type: Number, default: 0 },
}, { _id: false });

const RegistroAlimentosSchema = new mongoose.Schema({
  usuario_id: { type: String, required: true, index: true },

  // 🔑 CLAVES INTERNAS (frontend-friendly)
  comida: {
    type: String,
    enum: [
      'desayuno',
      'colacion_manana',
      'almuerzo',
      'colacion_tarde',
      'cena',
    ],
    required: true,
    index: true,
  },

  fecha: { type: Date, required: true, index: true },

  alimentos: { type: [AlimentoSchema], default: [] },
}, { timestamps: true });

RegistroAlimentosSchema.index(
  { usuario_id: 1, comida: 1, fecha: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  'RegistroAlimentos',
  RegistroAlimentosSchema
);
