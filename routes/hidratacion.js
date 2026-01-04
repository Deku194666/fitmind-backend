const express = require('express'); 
const router = express.Router();
const Hidratacion = require('../models/Hidratacion');

// Ruta de prueba
router.get('/', (req, res) => {
  res.json({ mensaje: 'Ruta de hidratación funcionando 🚰' });
});

// Registrar agua ingerida
router.post('/registrar', async (req, res) => {
  try {
    const { usuario_id, cantidad_ml } = req.body;

    const nuevaEntrada = new Hidratacion({
      usuario_id,
      cantidad_ml,
      fecha: new Date()
    });

    await nuevaEntrada.save();
    res.status(201).json({ mensaje: 'Registro creado con éxito' });
  } catch (error) {
    console.error('❌ Error al registrar hidratación:', error);
    res.status(500).json({ error: 'Error al registrar hidratación' });
  }
});

// Obtener todos los registros
router.get('/todos/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const registros = await Hidratacion.find({ usuario_id }).sort({ fecha: 1 });
    res.json(registros || []);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener registros' });
  }
});

// Resumen diario
router.get('/resumen/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;

    const hoy = new Date();
    const inicioDia = new Date(hoy.setHours(0, 0, 0, 0));
    const finDia = new Date(hoy.setHours(23, 59, 59, 999));

    const registrosHoy = await Hidratacion.find({
      usuario_id,
      fecha: { $gte: inicioDia, $lte: finDia }
    });

    const total = registrosHoy.reduce((t, r) => t + r.cantidad_ml, 0);

    res.json({ total_ml: total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener resumen' });
  }
});

module.exports = router;



