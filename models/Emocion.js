const mongoose = require('mongoose');

const emocionSchema = new mongoose.Schema({
  usuario_id: { type: String, required: true }, 

  sentimiento: { type: String, required: true },
  emocion: { type: String, required: true },
  descripcion: { type: String, default: "" },
  fecha: { type: String, required: true },
}, { timestamps: true });

const Emocion = mongoose.model('Emocion', emocionSchema);

module.exports = Emocion;