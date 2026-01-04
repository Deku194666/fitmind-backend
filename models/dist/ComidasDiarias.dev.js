"use strict";

var mongoose = require('mongoose');

var ComidasDiariasSchema = new mongoose.Schema({
  usuario_id: {
    type: String,
    required: true
  },
  comida: {
    type: String,
    required: true
  },
  // Desayuno, Almuerzo, Cena, etc.
  nombre: {
    type: String,
    required: true
  },
  cantidad: {
    type: Number,
    required: true
  },
  calorias: {
    type: Number,
    required: true
  },
  proteinas: {
    type: Number,
    required: true
  },
  grasas: {
    type: Number,
    required: true
  },
  carbohidratos: {
    type: Number,
    required: true
  },
  fibra: {
    type: Number,
    required: true
  },
  fecha: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model('ComidasDiarias', ComidasDiariasSchema);