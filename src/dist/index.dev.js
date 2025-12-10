"use strict";

var express = require('express');

var morgan = require('morgan');

var path = require('path');

var _require = require('./db'),
    mongoose = _require.mongoose;

var cors = require('cors'); // Importar middleware de sesión


var checkSessionTimeout = require('./authMiddleware'); // Importar rutas


var rutasUsuario = require('./routes/rutasUsuario');

var rutasdatosUsuario = require('./routes/datosUsuario');

var rutasSignosVitales = require('./routes/signosVitales');

var rutasHidratacion = require('./routes/hidratacion');

var rutasElongacion = require('./routes/Elongacion');

var rutasYoga = require('./routes/Yoga');

var rutasMusculacion = require('./routes/Musculacion');

var rutasSueno = require('./routes/Sueno');

var rutasCorrer = require('./routes/Correr');

var rutasTrote = require('./routes/Trote');

var rutasSprint = require('./routes/Sprint');

var rutasBicicleta = require('./routes/Bicicleta');

var rutasCaminar = require('./routes/Caminar');

var rutasNadar = require('./routes/Nadar');

var rutasBoxeoSaco = require('./routes/BoxeoSaco');

var rutasFarmacos = require('./routes/Farmacos');

var rutasAlimentos = require('./routes/Alimentos');

var rutasRegistroAlimentos = require('./routes/RegistroAlimentos'); // 👇 Wrapper para saltar el middleware SOLO en /api/datosusuario/register


function skipAuthForPublic(req, res, next) {
  var url = req.originalUrl.split('?')[0];
  var method = req.method; // Rutas públicas (agrega otras si las tienes, p.ej. /login)

  var OPEN = [{
    method: 'POST',
    regex: /^\/api\/datosusuario\/register$/
  } // { method: 'POST', regex: /^\/api\/datosusuario\/login$/ },
  ];
  var isOpen = OPEN.some(function (r) {
    return r.method === method && r.regex.test(url);
  });
  if (isOpen) return next(); // Resto: aplica el middleware real

  return checkSessionTimeout(req, res, next);
} // Configuración servidor


var app = express();
app.set('port', process.env.PORT || 4000); // Middleware global

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'user-id'] // añadí "user-id" para que lo acepte

}));
app.use(morgan('dev'));
app.use(express.json());
app.use(function (req, res, next) {
  console.log("Ruta solicitada: ".concat(req.method, " ").concat(req.url));
  next();
}); // Rutas públicas

app.use('/api/tareas', require('./routes/rutasTarea'));
app.use('/api/usuarios', rutasUsuario); // si tienes login/registro aquí, quedan públicos
// ⚠️ QUITA el montaje que tenías:
// app.use('/api/datosusuario/register', rutasdatosUsuario);
// Rutas de datosusuario con whitelist interna (register público, resto protegido)

app.use('/api/datosusuario', skipAuthForPublic, rutasdatosUsuario); // Rutas protegidas con middleware (resto de módulos)

app.use('/api/signos-vitales', checkSessionTimeout, rutasSignosVitales);
app.use('/api/hidratacion', checkSessionTimeout, rutasHidratacion);
app.use('/api/elongacion', checkSessionTimeout, rutasElongacion);
app.use('/api/yoga', checkSessionTimeout, rutasYoga);
app.use('/api/musculacion', checkSessionTimeout, rutasMusculacion);
app.use('/api/sueno', checkSessionTimeout, rutasSueno);
app.use('/api/correr', checkSessionTimeout, rutasCorrer);
app.use('/api/trote', checkSessionTimeout, rutasTrote);
app.use('/api/sprint', checkSessionTimeout, rutasSprint);
app.use('/api/bicicleta', checkSessionTimeout, rutasBicicleta);
app.use('/api/caminar', checkSessionTimeout, rutasCaminar);
app.use('/api/nadar', checkSessionTimeout, rutasNadar);
app.use('/api/boxeosaco', checkSessionTimeout, rutasBoxeoSaco);
app.use('/api/farmacos', checkSessionTimeout, rutasFarmacos);
app.use('/api/alimentos', checkSessionTimeout, rutasAlimentos);
app.use('/api/registroalimentos', checkSessionTimeout, rutasRegistroAlimentos);
app.get('/', function (req, res) {
  res.send('Servidor backend funcionando correctamente ✅');
}); // Archivos estáticos

console.log(path.join(__dirname, 'public')); // Iniciar el servidor

app.listen(app.get('port'), '0.0.0.0', function () {
  console.log("Servidor en el puerto ".concat(app.get('port')));
});