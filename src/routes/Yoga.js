// routes/yoga.js
const express = require('express');
const router = express.Router();
const Yoga = require('../models/Yoga');

// Crear sesión
router.post('/', async (req, res) => {
  try {
    const { usuario_id, tiempo, calorias } = req.body;
    if (!usuario_id || tiempo == null || calorias == null) {
      return res.status(400).json({ message: 'Datos incompletos' });
    }
    const doc = new Yoga({ usuario_id, tiempo, calorias });
    await doc.save();
    return res.status(201).json({ message: 'Sesión de yoga registrada' });
  } catch (e) {
    console.error('Error al guardar yoga:', e);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

// Historial (para gráficos) — ORDEN: antes de "/:usuario_id"
router.get('/historial/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const lista = await Yoga
      .find({ usuario_id })
      .sort({ fecha: 1, createdAt: 1, _id: 1 }); // asc para el gráfico

    return res.json(Array.isArray(lista) ? lista : []);
  } catch (e) {
    console.error('Error historial yoga:', e);
    return res.status(500).json([]);
  }
});

// Última sesión
router.get('/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const ultima = await Yoga.findOne({ usuario_id }).sort({ fecha: -1, createdAt: -1, _id: -1 });
    if (!ultima) return res.status(404).json([]);
    return res.json(ultima);
  } catch (e) {
    console.error('Error última yoga:', e);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
