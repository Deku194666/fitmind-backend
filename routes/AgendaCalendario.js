

const express = require("express");
const router = express.Router();
const Note = require("../models/AgendaCalendario");

/* Crear nota */
router.post("/", async (req, res) => {
  try {
    const { date, text } = req.body;
    const newNote = new Note({ date, text });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar nota" });
  }
});

/* Obtener notas por fecha */
router.get("/:date", async (req, res) => {
  try {
    const notes = await Note.find({ date: req.params.date });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener notas" });
  }
});


router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener notas" });
  }
});

module.exports = router;