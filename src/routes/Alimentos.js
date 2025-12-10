// routes/Alimentos.js
const express = require('express');
const router = express.Router();
const Alimento = require('../models/Alimentos');

// helper para convertir "52", "52 kcal", "12 g" => 52
const toNumber = (v) => {
  if (typeof v === 'number') return v;
  if (!v) return 0;
  const m = String(v).match(/-?\d+(\.\d+)?/);
  return m ? Number(m[0]) : 0;
};

router.get('/buscar', async (req, res) => {
  try {
    // 🔒 No-cache headers (evita 304 y respuestas vacías por caché del navegador)
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    res.set('Surrogate-Control', 'no-store');

    const q = (req.query.q || '').trim();
    if (!q) return res.json([]);

    // Regex seguro (escapa caracteres especiales) y case-insensitive
    const rx = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');

    const items = await Alimento.find(
      { $or: [{ nombre: rx }, { categoria: rx }] },
      { nombre: 1, categoria: 1, calorias: 1, proteinas: 1, grasas: 1, carbohidratos: 1, fibra: 1, porcion: 1 }
    )
    .limit(25)
    .lean();

    // Normalizamos numéricos (por si vienen como strings)
    const norm = items.map(x => ({
      ...x,
      calorias: toNumber(x.calorias),
      proteinas: toNumber(x.proteinas),
      grasas: toNumber(x.grasas),
      carbohidratos: toNumber(x.carbohidratos),
      fibra: toNumber(x.fibra),
    }));

    console.log(`[ALIMENTOS][buscar] q="${q}" -> ${norm.length} resultados`);
    res.json(norm);
  } catch (err) {
    console.error('Error /alimentos/buscar:', err);
    res.status(500).json({ error: 'Error buscando alimentos' });
  }
});

module.exports = router;
