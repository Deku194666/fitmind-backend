const express = require('express');
const router = express.Router();
const Musculacion = require('../models/Musculacion');


router.get('/', (req, res) => {
  res.json({ message: 'Musculacion API funcionando' });
});



/* 📜 Historial */
router.get('/historial/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const docs = await Musculacion.find({ usuario_id }).sort({ fecha: 1, _id: 1 });
    return res.json(docs);
  } catch (err) {
    console.error('❌ Error historial musculación:', err);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

/* 🆕 Última sesión */
router.get('/ultimo/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const doc = await Musculacion.findOne({ usuario_id }).sort({ fecha: -1, _id: -1 });
    if (!doc) return res.status(404).json({ message: 'Sin registros' });
    return res.json(doc);
  } catch (err) {
    console.error('❌ Error último musculación:', err);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

/* Compatibilidad */
router.get('/ultimo-simple/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const doc = await Musculacion.findOne({ usuario_id }).sort({ fecha: -1, _id: -1 });
    if (!doc) return res.status(404).json({ mensaje: 'No hay sesiones registradas' });
    return res.json(doc);
  } catch (err) {
    console.error('❌ Error último-simple:', err);
    return res.status(500).json({ mensaje: 'Error del servidor' });
  }
});

/* Registrar sesión */
router.post('/', async (req, res) => {
  try {
    const { usuario_id, tiempo, calorias } = req.body;

    if (!usuario_id || tiempo === undefined || calorias === undefined) {
      return res.status(400).json({ message: 'Datos incompletos' });
    }

    const nuevaSesion = new Musculacion({ usuario_id, tiempo, calorias });
    await nuevaSesion.save();

    return res.status(201).json({ message: 'Sesión registrada con éxito' });
  } catch (error) {
    console.error('Error al guardar sesión:', error);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

/* ⚠️ ESTA RUTA DEBE IR AL FINAL */
router.get('/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const doc = await Musculacion.findOne({ usuario_id }).sort({ fecha: -1, _id: -1 });
    if (!doc) return res.status(404).json({ message: 'Sin registros' });
    return res.json(doc);
  } catch (err) {
    console.error('❌ Error musculación GET simple:', err);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
