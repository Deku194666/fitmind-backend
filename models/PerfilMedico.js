

const mongoose = require('mongoose');

const PerfilMedicoSchema = new mongoose.Schema({
  usuario_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
    unique: true,
  },

  peso: String,
  talla: String,
  imc: String,

  diabetes: Boolean,
  hipertension: Boolean,

  medicamentos: [String],  // 🔥 ESTO ES CLAVE
  medRegular: String,

  estadoSalud: String,
  enfermedadDiagnosticada: String,
  enfermedadCronica: String,
  fuma: String,
  alcohol: String,
  alimentacion: String,
  ejercicio: String,
  sueno: String,
  emocional: String,
  sintomas: String,
  examenes: String,
  otros: String,
}, { timestamps: true });

module.exports = mongoose.model('PerfilMedico', PerfilMedicoSchema);