

const express = require('express');
const router = express.Router();
const Movimiento = require('../models/Movimiento');


// ✅ Crear movimiento
router.post('/', async (req, res) => {

  console.log("🔥 BODY RECIBIDO:", req.body);
  
  try {
    const movimiento = new Movimiento(req.body);
    const saved = await movimiento.save();

    res.status(201).json({
      ok: true,
      data: saved
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: error.message
    });
  }
});


// ✅ Obtener todos los movimientos
router.get('/', async (req, res) => {
  try {
    const movimientos = await Movimiento.find().sort({ fecha: -1 });

    res.json({
      ok: true,
      data: movimientos
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message
    });
  }
});


// ✅ Eliminar movimiento
router.delete('/:id', async (req, res) => {
  try {
    await Movimiento.findByIdAndDelete(req.params.id);

    res.json({
      ok: true,
      message: "Movimiento eliminado"
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message
    });
  }
});


module.exports = router;