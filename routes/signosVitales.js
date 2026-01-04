

const express = require('express');
const router = express.Router();
const SignosVitales = require('../models/SignosVitales');

console.log('Ruta /api/signos-vitales cargada'); // <- esto te confirma que se cargó la ruta

// Guardar datos
router.post('/', async (req, res) => {
  console.log('POST recibido en /api/signos-vitales', req.body);
  try {
    const nuevoRegistro = new SignosVitales({
      ...req.body,
      fecha: new Date() // fecha y hora exacta
    });

    const guardado = await nuevoRegistro.save();
    res.status(201).json(guardado);
  } catch (error) {
    console.error('Error al guardar:', error);
    res.status(500).json({ error: 'Error interno al guardar' });
  }
});


// Obtener todos los datos
router.get('/', async (req, res) => {
  console.log('GET recibido en /api/signos-vitales');
  try {
    const registros = await SignosVitales.find();
    res.json(registros);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
});


// GET registros de un usuario específico
router.get('/usuario/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const registros = await SignosVitales.find({ usuario_id }).sort({ fecha: -1, createdAt: -1 });
    res.json(registros);
  } catch (error) {
    console.error('Error al obtener registros por usuario:', error);
    res.status(500).json({ error: 'Error interno al obtener registros' });
  }
});

// GET último registro de un usuario
router.get('/ultimo/:usuario_id', async (req, res) => {
  try {
    const { usuario_id } = req.params;

    const ultimoRegistro = await SignosVitales.findOne({ usuario_id })
      .sort({ fecha: -1, createdAt: -1 }); // orden descendente por fecha y creación

    res.json(ultimoRegistro);
  } catch (error) {
    console.error('Error al obtener último signo vital:', error);
    res.status(500).json({ error: 'Error interno al obtener último registro' });
  }
});


// Actualizar un registro por ID
router.put('/:id', async (req, res) => {
  try {
    const actualizado = await SignosVitales.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // <-- devuelve el documento ya actualizado
    );
    if (!actualizado) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
    res.json(actualizado);
  } catch (error) {
    console.error('Error al actualizar:', error);
    res.status(500).json({ error: 'Error interno al actualizar' });
  }
});

// Eliminar un registro por ID
router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await SignosVitales.findByIdAndDelete(req.params.id);
    if (!eliminado) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
    res.json({ mensaje: 'Registro eliminado con éxito' });
  } catch (error) {
    console.error('Error al eliminar:', error);
    res.status(500).json({ error: 'Error interno al eliminar' });
  }
});


module.exports = router;

