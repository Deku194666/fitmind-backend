const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  usuario_id: { type: String, required: true }, // 🔥 CLAVE

  date: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("AgendaCalendario", noteSchema);