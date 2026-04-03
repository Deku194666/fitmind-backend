const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Habit = require("../models/Habit");
const HabitLog = require("../models/HabitLog");

// ⚠️ Usuario temporal mientras no tengas auth
const DEV_USER_ID = new mongoose.Types.ObjectId("65f1a2b3c4d5e6f7890abcd1");


// =============================
// 1️⃣ Crear nuevo hábito
// =============================
router.post("/", async (req, res) => {
  try {
    const { name, frequencyPerDay, usuario_id } = req.body;

    if (!usuario_id) {
      return res.status(400).json({ message: "usuario_id es requerido" });
    }

    const habit = await Habit.create({
      userId: usuario_id,  // 🔥 dinámico
      name,
      frequencyPerDay,
      active: true,
    });

    res.status(201).json(habit);
  } catch (error) {
    console.error("CREATE HABIT ERROR:", error);
    res.status(500).json({ message: "Error creating habit" });
  }
});




// =============================
// 2️⃣ Obtener hábitos activos
// =============================
router.get("/", async (req, res) => {
  try {
    const { usuario_id } = req.query;  // 🔥 del front

    if (!usuario_id) {
      return res.status(400).json({ message: "usuario_id es requerido" });
    }

    const habits = await Habit.find({
      userId: usuario_id,
      active: true,
    });

    res.json(habits);
  } catch (error) {
    console.error("GET HABITS ERROR:", error);
    res.status(500).json({ message: "Error fetching habits" });
  }
});

// =============================
// 3️⃣ Guardar o actualizar progreso diario
// =============================
router.post("/log", async (req, res) => {
  try {
    console.log("BODY RECIBIDO:", req.body);

    const { habitId, completed, usuario_id } = req.body;

    if (!usuario_id) {
      return res.status(400).json({ message: "usuario_id es requerido" });
    }

    const today = new Date().toISOString().split("T")[0]; // 🔥 CLAVE

    let log = await HabitLog.findOne({
      userId: usuario_id,
      habitId,
      date: today,
    });

    if (log) {
      log.completed = completed;
      await log.save();
    } else {
      log = await HabitLog.create({
        userId: usuario_id,
        habitId,
        date: today,
        completed,
      });
    }

    res.json(log);
  } catch (error) {
    console.error("🔥 SAVE LOG ERROR REAL:", error);
    res.status(500).json({ message: "Error saving habit log" });
  }
});

// =============================
// 4️⃣ Obtener logs de un día
// =============================
router.get("/log/:date", async (req, res) => {
  try {
    const { date } = req.params;
    const { usuario_id } = req.query;  // 🔥 del front

    if (!usuario_id) {
      return res.status(400).json({ message: "usuario_id es requerido" });
    }

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const logs = await HabitLog.find({
      userId: usuario_id,
      date: date
    });

    res.json(logs);
  } catch (error) {
    console.error("GET LOGS ERROR:", error);
    res.status(500).json({ message: "Error fetching logs" });
  }
});
module.exports = router;