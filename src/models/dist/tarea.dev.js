"use strict";

var mongoose = require('mongoose');

var _require = require('os'),
    type = _require.type;

var _require2 = require('webidl-conversions'),
    _float = _require2["float"];

var Schema = mongoose.Schema;
var schemaTarea = new Schema({
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Tarea', schemaTarea);