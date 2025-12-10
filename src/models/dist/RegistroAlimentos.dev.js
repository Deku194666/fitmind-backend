"use strict";

// models/RegistroAlimentos.js
var mongoose = require('mongoose');

var AlimentoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  cantidad: {
    type: Number,
    "default": 1
  },
  calorias: {
    type: Number,
    "default": 0
  },
  proteinas: {
    type: Number,
    "default": 0
  },
  grasas: {
    type: Number,
    "default": 0
  },
  carbohidratos: {
    type: Number,
    "default": 0
  },
  fibra: {
    type: Number,
    "default": 0
  }
}, {
  _id: false
});
var RegistroAlimentosSchema = new mongoose.Schema({
  usuario_id: {
    type: String,
    required: true,
    index: true
  },
  comida: {
    type: String,
    "enum": ['Desayuno', 'Colación Mañana', 'Almuerzo', 'Colación Tarde', 'Cena'],
    required: true,
    index: true
  },
  fecha: {
    type: Date,
    "default": Date.now,
    index: true
  },
  // 🔑
  alimentos: {
    type: [AlimentoSchema],
    "default": []
  }
}, {
  timestamps: true
}); // Upsert por día (usuario_id + comida + fecha normalizada)
// Si quieres evitar duplicados exactos de día:

RegistroAlimentosSchema.index({
  usuario_id: 1,
  comida: 1,
  fecha: 1
});
module.exports = mongoose.model('RegistroAlimentos', RegistroAlimentosSchema);