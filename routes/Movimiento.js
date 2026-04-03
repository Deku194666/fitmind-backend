

const express = require('express');
const router = express.Router();
const Movimiento = require('../models/Movimiento');

router.post('/', async (req, res) => {

  try {
    const { usuario_id, tipo, categoria, monto, descripcion, fecha } = req.body;

    if (!usuario_id) {
      return res.status(400).json({
        ok: false,
        message: "usuario_id es requerido"
      });
    }

    const movimiento = new Movimiento({
      usuario_id, // 🔥 clave
      tipo,
      categoria,
      monto,
      descripcion,
      fecha
    });

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

// ✅ Obtener movimientos por usuario
router.get('/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;

    const movimientos = await Movimiento.find({ usuario_id })
      .sort({ fecha: -1 });

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