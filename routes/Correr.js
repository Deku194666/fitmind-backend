// routes/Correr.js
const express = require('express');
const router = express.Router();
const Correr = require('../models/Correr');

// ✅ Historial (lista completa) — DEBE ir ANTES de '/:usuario_id'
router.get('/historial/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const sesiones = await Correr.find({ usuario_id })
      .sort({ fecha: 1, createdAt: 1, _id: 1 }); // ascendente para graficar
    return res.json(sesiones);
  } catch (err) {
    console.error('❌ Error al obtener historial de correr:', err);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

// POST /api/correr (guardar sesión)
router.post('/', async (req, res) => {
  try {
    const { usuario_id, tiempo, calorias } = req.body;
    if (!usuario_id || !tiempo || !calorias) {
      return res.status(400).json({ message: 'Datos incompletos' });
    }
    const nueva = new Correr({ usuario_id, tiempo, calorias }); // fecha por defecto
    await nueva.save();
    return res.status(201).json({ message: 'Sesión registrada con éxito' });
  } catch (err) {
    console.error('❌ Error al guardar sesión de correr:', err);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

// Última sesión /api/correr/:usuario_id
router.get('/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const ultima = await Correr.findOne({ usuario_id }).sort({ fecha: -1, createdAt: -1, _id: -1 });
    if (!ultima) return res.status(404).json({ message: 'No hay sesiones registradas' });
    return res.json(ultima);
  } catch (err) {
    console.error('❌ Error al obtener última sesión de correr:', err);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
