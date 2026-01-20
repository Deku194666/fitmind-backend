const express = require('express');
const router = express.Router();
const Musculacion = require('../models/Musculacion');

/* =========================
   🟢 TEST API
========================= */
router.get('/', (req, res) => {
  res.json({ message: 'Musculacion API funcionando' });
});

/* =========================
   📜 HISTORIAL COMPLETO
========================= */
router.get('/historial/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const docs = await Musculacion
      .find({ usuario_id })
      .sort({ fecha: 1, _id: 1 });

    return res.json(docs);
  } catch (err) {
    console.error('❌ Error historial musculación:', err);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

/* =========================
   🆕 ÚLTIMA SESIÓN
========================= */
router.get('/ultimo/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;

    const doc = await Musculacion
      .findOne({ usuario_id })
      .sort({ _id: -1 });

    if (!doc) {
      return res.status(404).json({ message: 'Sin registros' });
    }

    return res.json(doc);
  } catch (err) {
    console.error('❌ Error último musculación:', err);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

/* =========================
   🟢 SESIONES POR DÍA
   fecha = YYYY-MM-DD (STRING)
========================= */
router.get('/dia/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const { fecha } = req.query; // YYYY-MM-DD

    if (!fecha) {
      return res.status(400).json({ error: 'Fecha requerida' });
    }

    // 👇 convertir día local a rango UTC (Chile UTC-3)
    const inicioDia = new Date(`${fecha}T00:00:00-03:00`);
    const finDia = new Date(`${fecha}T23:59:59-03:00`);

    const sesiones = await Musculacion.find({
      usuario_id,
      fecha: {
        $gte: inicioDia,
        $lte: finDia
      }
    }).sort({ fecha: 1 });

    res.json(sesiones);
  } catch (error) {
    console.error('❌ Error musculación por día:', error);
    res.status(500).json({ error: 'Error al obtener musculación del día' });
  }
});


/* =========================
   🔄 COMPATIBILIDAD
========================= */
router.get('/ultimo-simple/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;

    const doc = await Musculacion
      .findOne({ usuario_id })
      .sort({ _id: -1 });

    if (!doc) {
      return res.status(404).json({ mensaje: 'No hay sesiones registradas' });
    }

    return res.json(doc);
  } catch (err) {
    console.error('❌ Error último-simple:', err);
    return res.status(500).json({ mensaje: 'Error del servidor' });
  }
});

/* =========================
   ➕ REGISTRAR SESIÓN
========================= */
router.post('/', async (req, res) => {
  try {
<<<<<<< HEAD
=======
    console.log('BODY RECIBIDO:', req.body);
    
>>>>>>> 6e1ee9e3f93555d4e752418bd080795ae0a362f6
    const { usuario_id, tiempo, calorias, notas } = req.body;

    if (!usuario_id || tiempo === undefined || calorias === undefined) {
      return res.status(400).json({ message: 'Datos incompletos' });
    }

<<<<<<< HEAD
    const nuevaSesion = new Musculacion({
      usuario_id,
      tiempo,
      calorias,
      notas,
    });

=======
    const nuevaSesion = new Musculacion({ usuario_id, tiempo, calorias, notas });
>>>>>>> 6e1ee9e3f93555d4e752418bd080795ae0a362f6
    await nuevaSesion.save();

    return res.status(201).json({ message: 'Sesión registrada con éxito' });
  } catch (error) {
    console.error('❌ Error al guardar sesión:', error);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

/* =========================
   ⚠️ RUTA GENÉRICA (AL FINAL)
========================= */
router.get('/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;

    const doc = await Musculacion
      .findOne({ usuario_id })
      .sort({ _id: -1 });

    if (!doc) {
      return res.status(404).json({ message: 'Sin registros' });
    }

    return res.json(doc);
  } catch (err) {
    console.error('❌ Error musculación GET simple:', err);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
