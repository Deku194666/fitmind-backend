// routes/Bicicleta.js
const express = require('express');
const router = express.Router();
const Bicicleta = require('../models/Bicicleta');

// POST /api/bicicleta  -> guarda una sesión
router.post('/', async (req, res) => {
  try {
    const { usuario_id, tiempo, calorias } = req.body;
    if (!usuario_id || !tiempo || !calorias) {
      return res.status(400).json({ message: 'Datos incompletos' });
    }
    const doc = new Bicicleta({ usuario_id, tiempo, calorias });
    await doc.save();
    res.status(201).json({ message: 'Sesión registrada con éxito' });
  } catch (err) {
    console.error('Error al guardar bicicleta:', err);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// GET /api/bicicleta/:usuario_id  -> última sesión
router.get('/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const ultima = await Bicicleta.findOne({ usuario_id })
      .sort({ fecha: -1, _id: -1 });
    if (!ultima) return res.status(404).json([]);
    res.json(ultima);
  } catch (err) {
    console.error('Error al obtener última bicicleta:', err);
    res.status(500).json([]);
  }
});

// GET /api/bicicleta/historial/:usuario_id  -> TODAS las sesiones (para gráficos)
router.get('/historial/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const lista = await Bicicleta.find({ usuario_id })
      .sort({ fecha: 1, _id: 1 }); // ascendente para graficar en línea temporal
    res.json(Array.isArray(lista) ? lista : []);
  } catch (err) {
    console.error('Error historial bicicleta:', err);
    res.status(500).json([]);
  }
});

module.exports = router;
