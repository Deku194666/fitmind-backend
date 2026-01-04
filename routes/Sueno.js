

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

// GET /api/sueno - (opcional) obtener todos los registros de sueño
router.get('/', async (req, res) => {
  try {
    const registros = await Sueno.find().sort({ fecha: -1 });
    res.json(registros);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo registros' });
  }
});

module.exports = router;
