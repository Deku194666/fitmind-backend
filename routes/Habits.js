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
    const { name, frequencyPerDay } = req.body;

    const habit = await Habit.create({
      userId: DEV_USER_ID,
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
    const habits = await Habit.find({
      userId: DEV_USER_ID,
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
    const { habitId, date, completedCount } = req.body;

    const habitObjectId = new mongoose.Types.ObjectId(habitId);

    // Crear rango del día completo
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const log = await HabitLog.findOneAndUpdate(
      {
        userId: DEV_USER_ID,
        habitId: habitObjectId,
        date: { $gte: startOfDay, $lte: endOfDay },
      },
      {
        userId: DEV_USER_ID,
        habitId: habitObjectId,
        date: startOfDay,
        completedCount,
      },
      {
        upsert: true,
        new: true,
      }
    );

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
    const date = req.params.date;

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const logs = await HabitLog.find({
      userId: DEV_USER_ID,
      date: { $gte: startOfDay, $lte: endOfDay },
    });

    res.json(logs);
  } catch (error) {
    console.error("GET LOGS ERROR:", error);
    res.status(500).json({ message: "Error fetching logs" });
  }
});

module.exports = router;