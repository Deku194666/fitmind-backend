const mongoose = require("mongoose");

const skincareSchema = new mongoose.Schema({

  usuario_id: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  morning: {
    cleanser: Boolean,
    moisturizer: Boolean,
    sunscreen: Boolean,
    treatment: Boolean
  },

  night: {
    cleanser: Boolean,
    moisturizer: Boolean,
    treatment: Boolean
  },

  skinState: {
    hydration: Number,
    irritation: Number,
    acne: Number
  },

  notes: String

}, { timestamps: true });

module.exports = mongoose.model("SkincareLog", skincareSchema);