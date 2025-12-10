// routes/Caminar.js
const express = require('express');
const router = express.Router();
const Caminar = require('../models/Caminar');

console.log('✅ routes/Caminar.js cargado');

// 👉 Historial (debe ir ANTES que "/:usuario_id")
router.get('/historial/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    console.log('GET /historial ->', usuario_id);
    const lista = await Caminar
      .find({ usuario_id })
      .sort({ fecha: 1, _id: 1 }); // asc para graficar
    return res.json(Array.isArray(lista) ? lista : []);
  } catch (e) {
    console.error('❌ Error historial caminar:', e);
    return res.status(500).json([]);
  }
});

// 👉 Última sesión
router.get('/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    console.log('GET /:usuario_id ->', usuario_id);
    const doc = await Caminar.findOne({ usuario_id }).sort({ fecha: -1, _id: -1 });
    if (!doc) return res.status(404).json({ message: 'No hay sesiones registradas' });
    return res.json(doc);
  } catch (e) {
    console.error('❌ Error última caminar:', e);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

// 👉 Crear sesión (esto faltaba)
router.post('/', async (req, res) => {
  try {
    const { usuario_id, tiempo, calorias } = req.body;
    console.log('POST / ->', { usuario_id, tiempo, calorias });

    if (!usuario_id || typeof tiempo !== 'number' || typeof calorias !== 'number') {
      return res.status(400).json({ message: 'Datos incompletos o inválidos' });
    }

    const doc = new Caminar({ usuario_id, tiempo, calorias });
    await doc.save();
    return res.status(201).json({ message: 'Sesión registrada con éxito', _id: doc._id });
  } catch (e) {
    console.error('❌ Error al guardar caminar:', e);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
