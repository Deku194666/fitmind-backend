const mongoose = require('mongoose');

const PerfilMedicoSchema = new mongoose.Schema({
  usuario_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
    unique: true,
  },

  // 🔹 ANTROPOMETRÍA
  peso: String,
  talla: String,
  imc: String,

  // 🔥 NUEVO → PLIEGUES CUTÁNEOS
  pliegues: {
    pectoral: { type: Number, default: 0 },
    abdominal: { type: Number, default: 0 },
    tricipital: { type: Number, default: 0 },
    subescapular: { type: Number, default: 0 },
    suprailiaco: { type: Number, default: 0 },
    muslo: { type: Number, default: 0 }
  },

  // 🔹 CONDICIONES
  diabetes: Boolean,
  hipertension: Boolean,

  // 🔹 MEDICACIÓN
  medicamentos: [String],
  medRegular: String,

  // 🔹 ESTADO GENERAL
  estadoSalud: String,
  enfermedadDiagnosticada: String,
  enfermedadCronica: String,

  // 🔹 ESTILO DE VIDA
  fuma: String,
  alcohol: String,
  alimentacion: String,
  ejercicio: String,
  sueno: String,
  emocional: String,

  // 🔹 OTROS
  sintomas: String,
  otros: String,
  
  // 🧪 EXÁMENES MÉDICOS
  
  // Básicos
  glicemia: String,
  hba1c: String,
  
  // 🩸 SANGRE
  hemoglobina: String,
  hematocrito: String,
  leucocitos: String,
  plaquetas: String,
  
  colesterolTotal: String,
  hdl: String,
  ldl: String,
  trigliceridos: String,
  
  ast: String,
  alt: String,
  bilirrubina: String,
  
  creatinina: String,
  urea: String,
  
  sodio: String,
  potasio: String,
  
  // 🚽 ORINA
  colorOrina: String,
  aspectoOrina: String,
  densidadOrina: String,
  phOrina: String,
  
  proteinasOrina: String,
  glucosaOrina: String,
  cetonasOrina: String,
  
  leucocitosOrina: String,
  eritrocitosOrina: String,
  bacteriasOrina: String,
  

}, { timestamps: true });

module.exports = mongoose.model('PerfilMedico', PerfilMedicoSchema);