

const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Obtener tareas por usuario
router.get("/:usuario_id", async (req, res, next) => {
  try {
    const { usuario_id } = req.params;

    const tasks = await Task.find({ usuario_id })
      .sort({ createdAt: -1 });

    res.json(tasks);

  } catch (err) {
    next(err);
  }
});


router.post("/", async (req, res, next) => {
  try {
    const { title, usuario_id } = req.body;

    if (!usuario_id) {
      return res.status(400).json({
        message: "usuario_id es requerido"
      });
    }

    const task = await Task.create({
      title,
      usuario_id, // 🔥 clave
      status: "pending"
    });

    res.status(201).json(task);

  } catch (err) {
    next(err);
  }
});



// Marcar como done
router.put("/:id", async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status: "done" },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    next(err);
  }
});

module.exports = router;