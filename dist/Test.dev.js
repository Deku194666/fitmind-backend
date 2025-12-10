"use strict";

var express = require('express');

var app = express();
app.get('/', function (req, res) {
  res.send('Servidor mínimo funcionando');
});
app.listen(4000, function () {
  console.log('Servidor test corriendo en puerto 4000');
});