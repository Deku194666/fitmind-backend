

const express = require("express");
const router = express.Router();
const Fasting = require("../models/Fasting");

// POST - Guardar ayuno terminado
router.post("/guardar", async (req, res) => {
  try {
    const { usuarioId, startTime, endTime, duration } = req.body;

    const nuevoAyuno = new Fasting({
      usuario: usuarioId,
      startTime,
      endTime,
      duration
    });

    await nuevoAyuno.save();

    res.status(201).json({ mensaje: "Ayuno guardado correctamente" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al guardar el ayuno" });
  }
});

// GET - Obtener último ayuno del usuario
router.get("/ultimo/:usuarioId", async (req, res) => {
  try {
    const { usuarioId } = req.params;

    const ultimoAyuno = await Fasting
      .findOne({ usuario: usuarioId })
      .sort({ createdAt: -1 });

    if (!ultimoAyuno) {
      return res.json(null); // mejor que 404
    }

    res.json(ultimoAyuno);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el último ayuno" });
  }
});

module.exports = router;