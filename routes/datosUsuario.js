

// routes/datosUsuario.js
const express = require('express');
const router = express.Router();
const DatosUsuario = require('../models/DatosUsuario');  // IMportando DatosUsuario
const Usuario = require ('../models/usuario');



const mongoose = require('mongoose');

router.get('/:id', async (req, res) => {
  try {
    const usuarioId = req.params.id;

    // Buscar DatosUsuario y hacer populate para traer los datos del usuario referenciado
    const datosUsuario = await DatosUsuario.findOne({ usuario: usuarioId }).populate('usuario', 'email'); 
    // O solo la parte que quieres traer del usuario referenciado

    if (!datosUsuario) {
      return res.status(404).json({ mensaje: 'Datos del usuario no encontrados' });
    }

    res.status(200).json(datosUsuario);
  } catch (error) {
    console.error('Error en GET /:id:', error);
    res.status(500).json({ mensaje: 'Error al obtener los datos del usuario' });
  }
});



router.get('/', async (req, res) => {
  try {
    const usuarios = await DatosUsuario.find(); // Obtener todos los documentos de la colección
    res.status(200).json(usuarios); // Responder con los datos
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los datos' });
  }
});


router.post('/register', async (req, res) => {
  let loginIdCreado = null;

  try {
    console.log('REQ /api/datosusuario/register ->', req.body);

    const { nombre, email, contraseña, edad, genero, pais, ciudad } = req.body;

    // ✅ Validaciones mínimas
    if (!nombre || !email || !contraseña) {
      return res.status(400).json({ mensaje: 'Faltan campos requeridos (nombre, email, contraseña)' });
    }

    const emailNorm = String(email).trim().toLowerCase();

    // ✅ Email único (colección "usuarios")
    const existe = await Usuario.findOne({ email: emailNorm }).lean();
    if (existe) {
      return res.status(400).json({ mensaje: 'El email ya esta registrado' });
    }

    // 1) Crear doc de login (colección "usuarios")
    const nuevoUsuarioLogin = new Usuario({
      email: emailNorm,
      contraseña,            // ⚠️ Recomendado: usar bcrypt y guardar passwordHash
    });
    const guardadoLogin = await nuevoUsuarioLogin.save();
    loginIdCreado = guardadoLogin._id;

    // 2) Crear perfil (colección "datosusuarios")
    const nuevoUsuario = new DatosUsuario({
      nombre: String(nombre).trim(),
      email: emailNorm,
      contraseña,            // ⚠️ Si no lo necesitas aquí, elimínalo del schema
      edad,
      genero,
      pais,
      ciudad,
      usuario: guardadoLogin._id, // referencia al doc de "usuarios"
    });
    const guardadoPerfil = await nuevoUsuario.save();

    // 3) Respuesta útil para el front
    return res.status(201).json({
      mensaje: 'Usuario registrado correctamente',
      usuarioId: guardadoLogin._id,   // <- para usar como "usuario_id" en el front
      datosUsuarioId: guardadoPerfil._id,
      nombre: guardadoPerfil.nombre,
      email: guardadoLogin.email,
    });

  } catch (error) {
    console.error('Error al registrar usuario:', error);

    // Duplicado índice único (por si hay unique en email)
    if (error && error.code === 11000) {
      return res.status(400).json({ mensaje: 'El email ya esta registrado' });
    }

    // Limpieza: si se creó el doc de login y falló luego, lo borramos
    if (loginIdCreado) {
      try { await Usuario.findByIdAndDelete(loginIdCreado); } catch (_) {}
    }

    return res.status(500).json({ mensaje: 'Error al registrar el usuario' });
  }
});
 




// Eliminar usuario por ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const usuarioEliminado = await DatosUsuario.findByIdAndDelete(id);

    if (!usuarioEliminado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el usuario' });
  }
});



// Ruta para actualizar los datos de un usuario por su ID
router.put('/:id', async (req, res) => {
  try {
    // ✅ Extraemos _id para evitar errores (Mongo no permite actualizar _id)
    const { _id, ...datosActualizados } = req.body;

    // ✅ Actualizamos usando el ID de la URL y los datos sin _id
    const usuarioActualizado = await DatosUsuario.findByIdAndUpdate(
      req.params.id,
      datosActualizados,
      { new: true } // Para que retorne el objeto ya actualizado
    );

    // ✅ Si no se encuentra el usuario, devolvemos 404
    if (!usuarioActualizado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    // ✅ Devolvemos mensaje de éxito
    res.json({ mensaje: 'Usuario actualizado correctamente' });

  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ mensaje: 'Error al actualizar el usuario', error });
  }
});






module.exports = router;

