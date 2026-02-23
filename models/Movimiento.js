
const mongoose = require("mongoose");

const MovimientoSchema = new mongoose.Schema({
  tipo: { 
    type: String, 
    enum: ["Ingreso", "Gasto"], 
    required: true 
  },

  categoria: { 
    type: String, 
    required: true,
    trim: true 
  },

  monto: { 
    type: Number, 
    required: true,
    min: 0
  },

  descripcion: { 
    type: String,
    trim: true
  },

  fecha: { 
    type: Date, 
    required: true,
    default: Date.now
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",   // cuando tengas autenticación
    required: false
  }

}, { timestamps: true });

module.exports = mongoose.model("Movimiento", MovimientoSchema);



