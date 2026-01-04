const mongoose = require('mongoose');

const DatosUsuarioSchema = new mongoose.Schema({
  usuario: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  edad: { type: Number, required: true },
  genero: { type: String, required: true },
  pais: { type: String, required: true },
  ciudad: { type: String, required: true },
  fechaRegistro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DatosUsuario', DatosUsuarioSchema, 'datosusuarios');



