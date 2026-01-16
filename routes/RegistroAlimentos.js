const express = require('express');
const router = express.Router();
const Comida = require('../models/RegistroAlimentos');

// Util: normaliza a 00:00
function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}


/* =========================
   📅 REGISTROS POR DÍA
========================= */
router.get('/dia/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const fechaStr = req.query.fecha; // YYYY-MM-DD

    if (!fechaStr) {
      return res.status(400).json({ error: 'Fecha requerida' });
    }

    // 🔑 Parse seguro de fecha (sin UTC bugs)
    const [y, m, d] = fechaStr.split('-').map(Number);

    const day = new Date(y, m - 1, d, 0, 0, 0, 0);
    
    const rows = await Comida.find({
      usuario_id,
      fecha: day
    }).sort({ comida: 1 });


    res.json(rows);
  } catch (err) {
    console.error('❌ Error comidas por día:', err);
    res.status(500).json({ error: 'Error al obtener comidas del día' });
  }
});


/* =========================
   📚 HISTORIAL COMPLETO
========================= */
router.get('/historial/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;

    const rows = await Comida.find({ usuario_id })
      .sort({ fecha: 1, comida: 1 });

    res.json(rows);
  } catch (err) {
    console.error('❌ Error historial alimentos:', err);
    res.status(500).json({ error: 'Error al obtener historial' });
  }
});


/* =========================
   💾 GUARDAR / UPSERT
========================= */
router.post('/', async (req, res) => {
  try {
    console.log('📥 BODY:', req.body);

    const { usuario_id, comida, alimento, fecha } = req.body;

    if (!usuario_id || !comida || !alimento || !fecha) {
      return res.status(400).json({
        error: 'usuario_id, comida, alimento y fecha son requeridos',
      });
    }

    // 🔑 Parse seguro YYYY-MM-DD
    const [y, m, d] = fecha.split('-').map(Number);
    const day = new Date(y, m - 1, d, 0, 0, 0, 0);

    const alimentoNorm = {
      nombre: alimento.nombre,
      cantidad: Number(alimento.cantidad) || 1,
      calorias: Number(alimento.calorias) || 0,
      proteinas: Number(alimento.proteinas) || 0,
      grasas: Number(alimento.grasas) || 0,
      carbohidratos: Number(alimento.carbohidratos) || 0,
      fibra: Number(alimento.fibra) || 0,
    };

    const doc = await Comida.findOneAndUpdate(
      { usuario_id, comida, fecha: day },
      {
        $push: { alimentos: alimentoNorm },
        $setOnInsert: { fecha: day },
      },
      { new: true, upsert: true }
    );

    console.log('✅ DOC GUARDADO:', doc);
    res.json(doc);
  } catch (err) {
    console.error('❌ Error guardando comida:', err);
    res.status(500).json({ error: 'Error al guardar comida' });
  }
});



module.exports = router;
