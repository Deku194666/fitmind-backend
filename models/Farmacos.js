


const mongoose = require('mongoose');

const FarmacosSchema = new mongoose.Schema({
  usuarioId: { type: String, required: true },
  farmaco: { type: String, required: true },
  dosis: { type: String },
  frecuencia: { type: String },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date, required: true },
  horas: { type: [String], required: true }, // formato "HH:mm"
  notas: { type: String },
  recordatoriosActivos: { type: Boolean, default: true },
  creadoEn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Farmacos', FarmacosSchema);
