const express = require('express');
const Comida = require('../models/Comida');
const router = express.Router();
const Alimento = require('../models/Alimentos');


// Crear nueva comida
router.post('/', async (req, res) => {
  try {
    const { nombre, ingredientes, totales } = req.body;
    const usuarioId = req.headers['user-id'];

    if (!usuarioId) {
      return res.status(401).json({ mensaje: 'Usuario no autorizado' });
    }

    if (!nombre || ingredientes.length === 0) {
      return res.status(400).json({ mensaje: 'Datos incompletos' });
    }

    // 🔹 Guardar la comida en la colección de comidas
    const nuevaComida = new Comida({
      nombre,
      usuarioId,
      ingredientes,
      totales
    });

    await nuevaComida.save();

    // 🔹 Guardar la misma comida como alimento para que aparezca en el buscador
    const nuevoAlimento = new Alimento({
      nombre: nombre,
      usuarioId: usuarioId,
      calorias: totales.calorias,
      proteinas: totales.proteinas,
      grasas: totales.grasas,
      carbohidratos: totales.carbos,
      fibra: totales.fibra
    });

    await nuevoAlimento.save();

    res.status(201).json({ mensaje: 'Comida guardada correctamente' });

  } catch (error) {
    console.error('Error al guardar comida:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
});

// Obtener comidas del usuario
router.get('/', async (req, res) => {
  try {
    const usuarioId = req.headers['user-id'];

    if (!usuarioId) {
      return res.status(401).json({ mensaje: 'Usuario no autorizado' });
    }

    const comidas = await Comida.find({ usuarioId }).sort({ createdAt: -1 });

    res.json(comidas);

  } catch (error) {
    console.error('Error al obtener comidas:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
});

module.exports = router;