

const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Obtener todas
router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

// Crear
router.post("/", async (req, res, next) => {
  try {
    const { title } = req.body;
    const task = await Task.create({ title });
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