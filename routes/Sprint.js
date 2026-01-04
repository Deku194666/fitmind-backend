

// routes/sprint.js
const express = require('express');
const router = express.Router();
const Sprint = require('../models/Sprint');

// POST: Registrar sesión de sprint
router.post('/', async (req, res) => {
  const { usuario_id, tiempo, calorias } = req.body;

  try {
    const nuevaSesion = new Sprint({ usuario_id, tiempo, calorias });
    await nuevaSesion.save();
    res.status(201).json({ mensaje: '✅ Sesión de sprint guardada correctamente' });
  } catch (err) {
    console.error('❌ Error al guardar sesión de sprint:', err);
    res.status(500).json({ error: 'Error al guardar sesión' });
  }
});

// GET: Última sesión por usuario
router.get('/:usuario_id', async (req, res) => {
  const { usuario_id } = req.params;

  try {
    const ultima = await Sprint.findOne({ usuario_id }).sort({ fecha: -1 });
    if (!ultima) {
      return res.status(404).json({ mensaje: 'No se encontraron sesiones de sprint' });
    }
    res.json(ultima);
  } catch (err) {
    console.error('❌ Error al obtener última sesión:', err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
});

// GET: Historial completo
router.get('/historial/:usuario_id', async (req, res) => {
  const { usuario_id } = req.params;

  try {
    const historial = await Sprint.find({ usuario_id }).sort({ fecha: -1 });
    res.json(historial);
  } catch (err) {
    console.error('❌ Error al obtener historial:', err);
    res.status(500).json({ error: 'Error al obtener historial' });
  }
});

module.exports = router;
