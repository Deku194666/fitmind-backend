

// index.js - FitMind

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

require('./db'); // Conexión MongoDB (después de dotenv)


const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const mongoose = require('mongoose'); 

const app = express();
const PORT = process.env.PORT || 4000;

// ---- CORS: debe ir antes de TODO lo demás ----
const corsOptions = {
  origin: function (origin, callback) {
    // Permitir requests sin origin (Postman, curl, mobile)
    if (!origin) return callback(null, true);

    // Permitir localhost
    if (origin.startsWith('http://localhost')) {
      return callback(null, true);
    }

    // Permitir cualquier subdominio trycloudflare.com
    if (origin.endsWith('.trycloudflare.com')) {
      return callback(null, true);
    }

    // ✅ Permitir Vercel (FitMind frontend)
    if (origin === 'https://fitmind-frontend-phi.vercel.app') {
      return callback(null, true);
    }

    // Bloquear el resto
    return callback(new Error('Not allowed by CORS: ' + origin));
  },
  credentials: true,
  methods:['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'user-id', 'Accept'],
  optionsSuccessStatus: 204
};


app.use(cors(corsOptions));




// --- Middlewares globales (logs/parsers) ---
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));


app.use((req, res, next) => {
  res.setHeader("ngrok-skip-browser-warning", "true");
  next();
});


// --- Middleware temporal para debug (mantener después de CORS) ---
function checkSessionTimeout(req, res, next) {
  console.log('[checkSessionTimeout] URL:', req.originalUrl);
  console.log('[checkSessionTimeout] Method:', req.method);
  next();
}

// Logger simple de rutas
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Archivos estáticos
const publicPath = path.join(__dirname, 'public');
app.use('/public', express.static(publicPath));

// --- Ruta raíz ---
app.get('/', (req, res) => res.send('Servidor base funcionando ✅'));

// ========================
// Activación de rutas
// Descomenta **una por una** para debug
// ========================

// --- Rutas de usuarios ---
const rutasUsuario = require('./routes/rutasUsuario');
app.use('/api/usuarios', rutasUsuario);

// --- Rutas de datos de usuario ---
const rutasdatosUsuario = require('./routes/datosUsuario');
app.use('/api/datosusuario', checkSessionTimeout, rutasdatosUsuario);


// --- Rutas de actividades ---
const rutasHidratacion = require('./routes/hidratacion');
app.use('/api/hidratacion', checkSessionTimeout, rutasHidratacion);

const rutasMusculacion = require('./routes/Musculacion');
app.use('/api/musculacion', checkSessionTimeout, rutasMusculacion);

// (otras rutas comentadas...)

// --- Rutas de actividades y signos vitales --- 
// 
const rutasSignosVitales = require('./routes/signosVitales');
app.use('/api/signos-vitales', checkSessionTimeout, rutasSignosVitales); 
 
const rutasElongacion = require('./routes/Elongacion');
app.use('/api/elongacion', checkSessionTimeout, rutasElongacion); 
 
const rutasYoga = require('./routes/Yoga'); 
app.use('/api/yoga', checkSessionTimeout, rutasYoga); 
 
const rutasSueno = require('./routes/Sueno'); 
app.use('/api/sueno', checkSessionTimeout, rutasSueno); 

const rutasCorrer = require('./routes/Correr'); 
app.use('/api/correr', checkSessionTimeout, rutasCorrer);

const rutasTrote = require('./routes/Trote');
app.use('/api/trote', checkSessionTimeout, rutasTrote); 
  
const rutasSprint = require('./routes/Sprint'); 
app.use('/api/sprint', checkSessionTimeout, rutasSprint); 
  
const rutasBicicleta = require('./routes/Bicicleta'); 
app.use('/api/bicicleta', checkSessionTimeout, rutasBicicleta); 
  
const rutasCaminar = require('./routes/Caminar');
app.use('/api/caminar', checkSessionTimeout, rutasCaminar);

const rutasNadar = require('./routes/Nadar'); 
app.use('/api/nadar', checkSessionTimeout, rutasNadar);

const rutasBoxeoSaco = require('./routes/BoxeoSaco');
app.use('/api/boxeosaco', checkSessionTimeout, rutasBoxeoSaco);

const rutasFarmacos = require('./routes/Farmacos');
app.use('/api/farmacos', checkSessionTimeout, rutasFarmacos);
 
const rutasAlimentos = require('./routes/Alimentos');
app.use('/api/alimentos', checkSessionTimeout, rutasAlimentos); 
  
const rutasRegistroAlimentos = require('./routes/RegistroAlimentos');
app.use('/api/registroalimentos', checkSessionTimeout, rutasRegistroAlimentos);

// --- Ruta de debug para ver headers ---
app.get('/debug/headers', (req, res) => {
  res.json(req.headers);
});

// --- Middleware de manejo de errores ---
app.use((err, req, res, next) => {
  console.error('Error capturado por middleware:', err);
  if (res.headersSent) return next(err);
  res.status(err.status || 500).json({
    ok: false,
    message: err.message || 'Error interno del servidor',
  });
});

// --- Iniciar servidor ---
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// --- Shutdown limpio ---
async function shutdown(signal) {
  console.info(`Recibida señal ${signal}, cerrando servidor...`);
  server.close(async () => {
    try {
      await mongoose.connection.close(false);
      console.log('Conexión Mongo cerrada');
      process.exit(0);
    } catch (err) {
      console.error('Error cerrando Mongo:', err);
      process.exit(1);
    }
  });
}
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

module.exports = app;
