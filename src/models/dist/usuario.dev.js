"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var schemaUsuario = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  contraseña: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Usuario', schemaUsuario);