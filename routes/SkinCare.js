const express = require("express");
const router = express.Router();

const SkincareLog = require("../models/SkincareLog");


/* =====================================================
   🔥 GUARDAR REGISTRO
===================================================== */

router.post("/", async (req, res) => {

  console.log("BODY RECIBIDO:", req.body);

  try {

    const log = new SkincareLog({
      ...req.body,
      usuario_id: req.body.usuario_id // ✅ aseguramos que venga correcto
    });

    const saved = await log.save();

    res.json(saved);

  } catch (error) {

    console.error("ERROR GUARDANDO SKINCARE:", error);

    res.status(500).json({
      error: "Error guardando skincare log"
    });
  }

});


/* =====================================================
   🔥 OBTENER REGISTROS POR USUARIO
===================================================== */

router.get("/:userId", async (req, res) => {

  try {

    const logs = await SkincareLog.find({
      usuario_id: req.params.userId // ✅ CORREGIDO
    }).sort({ date: -1 });

    res.json(logs);

  } catch (error) {

    console.error("ERROR OBTENIENDO SKINCARE:", error);

    res.status(500).json({
      error: "Error obteniendo logs de skincare"
    });
  }

});


/* =====================================================
   🔥 OBTENER TODOS (DEBUG / ADMIN)
===================================================== */

router.get("/", async (req, res) => {

  try {

    const logs = await SkincareLog.find().sort({ date: -1 });

    res.json(logs);

  } catch (error) {

    console.error("ERROR OBTENIENDO TODOS LOS LOGS:", error);

    res.status(500).json({
      error: "Error obteniendo todos los logs"
    });
  }

});


module.exports = router;