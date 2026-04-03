

const express = require('express');
const router = express.Router();
const Sueno = require('../models/Sueno');

// POST /api/sueno - Crear nuevo registro de sueño
router.post('/', async (req, res) => {
  try {
    const nuevoSueno = new Sueno(req.body);
    await nuevoSueno.save();
    res.status(201).json({ message: 'Registro de sueño guardado', data: nuevoSueno });
  } catch (error) {
    console.error('Error guardando registro de sueño:', error);
    res.status(500).json({ error: 'Error guardando registro de sueño' });
  }
});



// GET /api/sueno/historial/:usuario_id
router.get('/historial/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;

    const registros = await Sueno.find({ usuario_id })
      .sort({ fecha: 1 });

    res.json(registros);
  } catch (error) {
    console.error('Error obteniendo historial de sueño:', error);
    res.status(500).json({ error: 'Error obteniendo historial de sueño' });
  }
});

module.exports = router;
