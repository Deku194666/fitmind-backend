


// routes/trote.js
const express = require('express');
const router = express.Router();
const Trote = require('../models/Trote');

// POST - Registrar sesión de trote
router.post('/', async (req, res) => {
  const { usuario_id, tiempo, calorias } = req.body;
  try {
    const nuevaSesion = new Trote({ usuario_id, tiempo, calorias });
    await nuevaSesion.save();
    res.status(201).json({ mensaje: 'Sesión de trote registrada' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al guardar sesión de trote', error });
  }
});

// GET - Última sesión por usuario
router.get('/:usuario_id', async (req, res) => {
  const { usuario_id } = req.params;
  try {
    const sesion = await Trote.findOne({ usuario_id }).sort({ fecha: -1 });
    res.json(sesion);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener última sesión', error });
  }
});

// GET - Historial completo por usuario
router.get('/historial/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const historial = await Trote.find({ usuario_id }).sort({ fecha: -1 }).limit(10);
    res.json(historial);
  } catch (err) {
    console.error('❌ Error al obtener historial de trote:', err);
    res.status(500).json({ error: 'Error al obtener historial' });
  }
});


module.exports = router;
