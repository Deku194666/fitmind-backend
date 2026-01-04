// routes/registroAlimentos.js
const express = require('express');
const router = express.Router();
const Comida = require('../models/RegistroAlimentos');

// Util: normaliza a 00:00:00
function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0,0,0,0);
  return x;
}

// GET: último registro por comida (uno por cada tipo)
router.get('/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;

    // Tomamos el más reciente por comida con aggregate
    const rows = await Comida.aggregate([
      { $match: { usuario_id } },
      { $sort: { fecha: -1, createdAt: -1, _id: -1 } },
      { $group: { _id: '$comida', doc: { $first: '$$ROOT' } } },
      { $replaceWith: '$doc' },
      { $sort: { fecha: 1 } }, // opcional: ordenar por orden de comidas
    ]);

    res.json(rows);
  } catch (err) {
    console.error('Error al obtener comidas:', err);
    res.status(500).json({ error: 'Error al obtener comidas' });
  }
});

// GET: registros del día (por cada comida) ?fecha=YYYY-MM-DD
router.get('/dia/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const fechaStr = req.query.fecha; // "YYYY-MM-DD"

    if (!fechaStr) {
      return res.status(400).json({ error: 'Fecha requerida' });
    }

    const rows = await RegistroAlimentos.find({
      usuario_id,
      $expr: {
        $eq: [
          { $dateToString: { format: "%Y-%m-%d", date: "$fecha" } },
          fechaStr
        ]
      }
    }).sort({ comida: 1 });

    res.set({
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Surrogate-Control': 'no-store',
    });

    res.json(rows);
  } catch (err) {
    console.error('Error al obtener comidas del día:', err);
    res.status(500).json({ error: 'Error al obtener comidas del día' });
  }
});

// GET: historial completo, ordenado por fecha asc
router.get('/historial/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const rows = await Comida.find({ usuario_id })
      .sort({ fecha: 1, createdAt: 1, _id: 1 });
    res.json(rows);
  } catch (err) {
    console.error('Error al obtener historial:', err);
    res.status(500).json({ error: 'Error al obtener historial' });
  }
});

// POST: upsert por (usuario_id, comida, fecha-normalizada)
router.post('/', async (req, res) => {
  try {
    const { usuario_id, comida, alimentos, fecha } = req.body;
    if (!usuario_id || !comida) {
      return res.status(400).json({ error: 'usuario_id y comida son requeridos' });
    }

    // Normalizamos la fecha a 00:00 UTC del día que llega (o hoy)
    const day = startOfDay(fecha ? new Date(fecha) : new Date());

    // Coerción de números por seguridad
    const alimentosNorm = Array.isArray(alimentos) ? alimentos.map(a => ({
      nombre: a.nombre,
      cantidad: Number(a.cantidad) || 1,
      calorias: Number(a.calorias) || 0,
      proteinas: Number(a.proteinas) || 0,
      grasas: Number(a.grasas) || 0,
      carbohidratos: Number(a.carbohidratos) || 0,
      fibra: Number(a.fibra) || 0,
    })) : [];

    const doc = await Comida.findOneAndUpdate(
      { usuario_id, comida, fecha: day },
      { $set: { alimentos: alimentosNorm, fecha: day } },
      { new: true, upsert: true }
    );

    res.json(doc);
  } catch (err) {
    console.error('Error al guardar la comida:', err);
    res.status(500).json({ error: 'Error al guardar la comida' });
  }
});

module.exports = router;
