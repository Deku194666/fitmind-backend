

const express = require("express");
const router = express.Router();
const Note = require("../models/AgendaCalendario");


router.post("/", async (req, res) => {
  try {
    const { usuario_id, date, text } = req.body;

    if (!usuario_id) {
      return res.status(400).json({ error: "usuario_id es requerido" });
    }

    const newNote = new Note({
      usuario_id, // 🔥 clave
      date,
      text
    });

    await newNote.save();
    res.status(201).json(newNote);

  } catch (error) {
    res.status(500).json({ error: "Error al guardar nota" });
  }
});



// Obtener notas por usuario y fecha
router.get("/:usuario_id/:date", async (req, res) => {
  try {
    const { usuario_id, date } = req.params;

    const notes = await Note.find({ usuario_id, date });

    res.json(notes);

  } catch (error) {
    res.status(500).json({ error: "Error al obtener notas" });
  }
});

module.exports = router;