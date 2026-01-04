

const mongoose = require('mongoose');

const SuenoSchema = new mongoose.Schema({
  fecha: { type: Date, required: true },
  horaDormir: { type: String, required: true },   // hora en formato 'HH:mm'
  horaDespertar: { type: String, required: true }, // hora en formato 'HH:mm'
  despertares: { type: Number, default: 0 },
  calidad: { type: Number, min: 1, max: 5, default: 3 },
  pantallasAntes: { type: Boolean, default: false },
  cafeNoche: { type: Boolean, default: false },
  somnolencia: { type: Boolean, default: false },
  notas: { type: String, default: '' }
});

module.exports = mongoose.model('Sueno', SuenoSchema);
