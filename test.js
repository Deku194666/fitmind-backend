
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor mínimo funcionando');
});

app.listen(4000, () => {
  console.log('Servidor test corriendo en puerto 4000');
});
