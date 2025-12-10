// routes/BoxeoSaco.js
const express = require('express');
const router = express.Router();
const BoxeoSaco = require('../models/BoxeoSaco');

// 📈 Historial (para gráficas) — devuelve SIEMPRE un array
router.get('/historial/:usuario_id', async (req, res) => {
  const { usuario_id } = req.params;
  try {
    const lista = await BoxeoSaco
      .find({ usuario_id })
      .sort({ fecha: 1, createdAt: 1, _id: 1 }); // ascendente para la línea

    return res.json(Array.isArray(lista) ? lista : []);
  } catch (e) {
    console.error('Error historial boxeosaco:', e);
    return res.status(500).json([]);
  }
});

// 🆕 Registrar sesión
router.post('/', async (req, res) => {
  try {
    const { usuario_id, tiempo, calorias } = req.body;
    if (!usuario_id || tiempo == null || calorias == null) {
      return res.status(400).json({ message: 'Datos incompletos' });
    }
    const doc = new BoxeoSaco({ usuario_id, tiempo, calorias });
    await doc.save();
    return res.status(201).json({ message: 'Sesión registrada con éxito' });
  } catch (err) {
    console.error('Error al registrar boxeosaco:', err);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

// 📦 Última sesión (para tarjeta “último”)
router.get('/:usuario_id', async (req, res) => {
  const { usuario_id } = req.params;
  try {
    const ultima = await BoxeoSaco
      .findOne({ usuario_id })
      .sort({ fecha: -1, createdAt: -1, _id: -1 });

    if (!ultima) return res.status(404).json([]);
    return res.json(ultima);
  } catch (e) {
    console.error('Error última boxeosaco:', e);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
