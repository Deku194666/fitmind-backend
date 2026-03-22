const express = require('express');
const Emocion = require('../models/Emocion'); // modelo ya creado

const router = express.Router();

// Obtener todas las emociones
router.get('/', async (req, res) => {
  try {
    const emociones = await Emocion.find().sort({ fecha: -1 });
    res.status(200).json(emociones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener emociones por fecha YYYY-MM-DD
router.get('/:fecha', async (req, res) => {
  const { fecha } = req.params;
  try {
    const emociones = await Emocion.find({ fecha });
    res.status(200).json(emociones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear nueva emoción
router.post('/', async (req, res) => {
  const { sentimiento, emocion, descripcion, fecha } = req.body;
  try {
    const nuevaEmocion = new Emocion({ sentimiento, emocion, descripcion, fecha });
    await nuevaEmocion.save();
    res.status(201).json(nuevaEmocion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Exportar con CommonJS (porque tu index.js usa require)
module.exports = router;