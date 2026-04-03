// routes/HistorialFasting.js
const express = require("express");
const router = express.Router();
const HistorialFasting = require("../models/HistorialFasting");

// ===============================
// GET: ayunos de un usuario por día
// ===============================
router.get("/dia/:usuarioId", async (req, res) => {
  try {
    const { usuarioId } = req.params;
    const { fecha } = req.query; // fecha en formato 'YYYY-MM-DD'

    if (!fecha) return res.status(400).json({ error: "Falta la fecha" });

    // Filtrar por el día completo
    const inicioDia = new Date(fecha + "T00:00:00.000Z");
    const finDia = new Date(fecha + "T23:59:59.999Z");

    const registros = await HistorialFasting.find({
      usuario: usuarioId,
      startTime: { $gte: inicioDia, $lte: finDia }
    }).sort({ startTime: 1 });

    res.json(registros);

  } catch (error) {
    console.error("Error cargando ayunos:", error);
    res.status(500).json({ error: "Error cargando ayunos" });
  }
});

// ===============================
// GET: todos los ayunos de un usuario
// ===============================
router.get("/todos/:usuarioId", async (req, res) => {
  try {
    const { usuarioId } = req.params;

    const registros = await HistorialFasting.find({
      usuario: usuarioId
    }).sort({ startTime: -1 }); // del más reciente al más antiguo

    res.json(registros);

  } catch (error) {
    console.error("Error cargando todos los ayunos:", error);
    res.status(500).json({ error: "Error cargando todos los ayunos" });
  }
});


// POST: guardar ayuno en historial
router.post("/guardar", async (req, res) => {
  try {
    const { usuarioId, startTime, endTime, duration } = req.body;

    if (!usuarioId || !startTime || !endTime || !duration) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const nuevoAyuno = new HistorialFasting({
      usuario: usuarioId,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      duration
    });

    await nuevoAyuno.save();

    res.json({ ok: true, ayuno: nuevoAyuno });
  } catch (error) {
    console.error("Error guardando historial:", error);
    res.status(500).json({ error: "Error guardando historial" });
  }
});

module.exports = router;