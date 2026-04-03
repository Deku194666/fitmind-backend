// routes/elongacion.js
const express = require('express');
const router = express.Router();
const Elongacion = require('../models/Elongacion');

router.post('/', async (req, res) => {
  try {
    console.log('📥 Datos recibidos:', req.body);
    const nuevaSesion = new Elongacion(req.body);
    const guardado = await nuevaSesion.save();
    res.status(201).json(guardado);
  } catch (error) {
    console.error('❌ Error al guardar:', error);
    res.status(500).json({ error: 'Error al guardar en la base de datos' });
  }
});



// 🟢 HISTORIAL COMPLETO (para gráficos)
router.get('/historial/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;

    const registros = await Elongacion
      .find({ usuario_id })
      .sort({ fecha: 1 }); // orden cronológico

    res.json(registros);
  } catch (error) {
    console.error('❌ Error historial elongación:', error);
    res.status(500).json({ error: 'Error al obtener historial de elongación' });
  }
});



router.get('/:usuario_id', async (req, res) => {
  try {
    const registros = await Elongacion.find({ usuario_id: req.params.usuario_id }).sort({ fecha: -1 }).limit(1);
    res.json(registros[0] || {});
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos de elongación' });
  }
});

module.exports = router;


