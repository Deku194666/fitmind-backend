// routes/Nadar.js
const express = require('express');
const router = express.Router();
const Nadar = require('../models/Nadar');

// ✅ Historial (debe ir ANTES del '/:usuario_id')
router.get('/historial/:usuario_id', async (req, res) => {
  const { usuario_id } = req.params;
  try {
    const lista = await Nadar
      .find({ usuario_id })
      .sort({ fecha: 1, createdAt: 1, _id: 1 }); // asc para graficar
    return res.json(Array.isArray(lista) ? lista : []);
  } catch (e) {
    console.error('Error historial nadar:', e);
    return res.status(500).json([]);
  }
});

// Última sesión
router.get('/:usuario_id', async (req, res) => {
  const { usuario_id } = req.params;
  try {
    const doc = await Nadar
      .findOne({ usuario_id })
      .sort({ fecha: -1, createdAt: -1, _id: -1 });
    if (!doc) return res.status(404).json({});
    return res.json(doc);
  } catch (e) {
    console.error('Error última sesión nadar:', e);
    return res.status(500).json({});
  }
});

// Registrar sesión
router.post('/', async (req, res) => {
  try {
    const { usuario_id, tiempo, calorias } = req.body;
    if (!usuario_id || tiempo == null || calorias == null) {
      return res.status(400).json({ message: 'Datos incompletos' });
    }
    const nueva = new Nadar({ usuario_id, tiempo, calorias });
    await nueva.save();
    return res.status(201).json({ message: 'Sesión registrada con éxito' });
  } catch (e) {
    console.error('Error al guardar nadar:', e);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
