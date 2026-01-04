const express = require('express');
const Farmacos = require('../models/Farmacos');
const router = express.Router();

// Registrar fármaco
router.post('/', async (req, res) => {
  try {
    const nuevoFarmaco = new Farmacos(req.body);
    await nuevoFarmaco.save();
    res.status(201).json({ message: 'Fármaco registrado correctamente' });
  } catch (error) {
    console.error('Error al registrar fármaco:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// Obtener fármacos por usuario
router.get('/:usuarioId', async (req, res) => {
  try {
    const farmacos = await Farmacos.find({ usuarioId: req.params.usuarioId }).sort({ fechaInicio: -1 });
    res.json(farmacos);
  } catch (error) {
    console.error('Error al obtener fármacos:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// Obtener fármacos activos en un día específico
router.get('/agenda/:usuarioId', async (req, res) => {
  const { usuarioId } = req.params;
  const fecha = req.query.fecha || new Date().toISOString().split('T')[0];

  try {
    const farmacos = await Farmacos.find({
      usuarioId,
      fechaInicio: { $lte: fecha },
      fechaFin: { $gte: fecha }
    });

    res.json(farmacos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la agenda' });
  }
});

// 🔥 NUEVA RUTA: Obtener fármacos entre dos fechas (mes actual)
router.get('/mes', async (req, res) => {
  const { usuarioId, fechaInicio, fechaFin } = req.query;

  if (!usuarioId || !fechaInicio || !fechaFin) {
    return res.status(400).json({ mensaje: 'Faltan parámetros' });
  }

  try {
    const farmacos = await Farmacos.find({
      usuarioId,
      $or: [
        {
          fechaInicio: { $lte: fechaFin },
          fechaFin: { $gte: fechaInicio }
        }
      ]
    });

    res.json(farmacos);
  } catch (error) {
    console.error('Error al obtener fármacos del mes:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
});

module.exports = router;
