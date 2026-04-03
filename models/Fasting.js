

const mongoose = require("mongoose");

const fastingSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  duration: {
    type: Number, // milisegundos
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Fasting", fastingSchema);