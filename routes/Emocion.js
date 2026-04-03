const express = require('express');
const Emocion = require('../models/Emocion'); // modelo ya creado

const router = express.Router();


// Obtener emociones por usuario
router.get('/:usuario_id', async (req, res) => {
  const { usuario_id } = req.params;

  try {
    const emociones = await Emocion.find({ usuario_id })
      .sort({ fecha: -1 });

    res.status(200).json(emociones);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});;


// Crear nueva emoción
router.post('/', async (req, res) => {
  const { usuario_id, sentimiento, emocion, descripcion, fecha } = req.body;

  try {
    if (!usuario_id) {
      return res.status(400).json({ message: "usuario_id es requerido" });
    }

    const nuevaEmocion = new Emocion({
      usuario_id, // 🔥 clave
      sentimiento,
      emocion,
      descripcion,
      fecha
    });

    await nuevaEmocion.save();
    res.status(201).json(nuevaEmocion);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Exportar con CommonJS (porque tu index.js usa require)
module.exports = router;