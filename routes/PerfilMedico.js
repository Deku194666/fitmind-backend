

const express = require('express');
const router = express.Router();
const PerfilMedico = require('../models/PerfilMedico');


// =============================
// 🔎 OBTENER PERFIL MÉDICO
// =============================
router.get('/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;

    const perfil = await PerfilMedico.findOne({ usuario_id });

    if (!perfil) {
      return res.status(404).json({ message: 'Perfil médico no encontrado' });
    }

    res.json(perfil);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener perfil médico' });
  }
});


// =============================
// 💾 GUARDAR / ACTUALIZAR PERFIL MÉDICO
// =============================
router.put('/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const datos = req.body;

    const perfilActualizado = await PerfilMedico.findOneAndUpdate(
      { usuario_id },
      { ...datos, usuario_id, fechaActualizacion: new Date() },
      { new: true, upsert: true }
    );

    res.json(perfilActualizado);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al guardar perfil médico' });
  }
});

module.exports = router;