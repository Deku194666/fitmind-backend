const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const DatosUsuario = require('../models/DatosUsuario');
const { createSession } = require('../sessionService'); 

// ========================================
// GET: todos los usuarios (solo para debug)
// ========================================
router.get('/', async (req, res) => {
  console.log('📣 Petición recibida en /api/usuarios'); 
  try {
    const usuarios = await Usuario.find();
    console.log('✅ Usuarios encontrados:', usuarios.length); 
    res.json(usuarios);
  } catch (error) {
    console.error('❌ Error al obtener usuarios:', error); 
    res.status(500).json({ mensaje: "Error al obtener los usuarios", error: error.message });
  }
});

// ========================================
// POST: registro de usuario
// ========================================
router.post('/register', async (req, res) => {
  const { email, contraseña } = req.body;
  console.log('Registro request:', email);

  try {
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El correo ya está registrado' });
    }

    const nuevoUsuario = new Usuario({ email, contraseña });
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('❌ Error en registro:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});

// ========================================
// POST: login de usuario
// ========================================
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login request:', email);

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas - usuario no existe' });
    }

    if (usuario.contraseña !== password) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas - contraseña incorrecta' });
    }

    const datos = await DatosUsuario.findOne({ usuario: usuario._id });
    if (!datos) {
      return res.status(404).json({ mensaje: 'Datos del usuario no encontrados' });
    }

    createSession(usuario._id.toString());

    res.status(200).json({
      mensaje: 'Login exitoso',
      usuarioId: usuario._id,
      email: usuario.email,
      nombre: datos.nombre
    });
  } catch (error) {
    console.error('❌ Error en login:', error);
    res.status(500).json({ mensaje: 'Error al iniciar sesión' });
  }
});

// ========================================
// PUT: actualizar usuario por ID
// ========================================
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { email, contraseña } = req.body;

  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      id,
      { email, contraseña },
      { new: true }
    );

    if (!usuarioActualizado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.json({ mensaje: 'Usuario actualizado', usuario: usuarioActualizado });
  } catch (error) {
    console.error('❌ Error al actualizar usuario:', error);
    res.status(500).json({ mensaje: 'Error al actualizar el usuario' });
  }
});

// ========================================
// DELETE: eliminar usuario por ID
// ========================================
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);
    if (!usuarioEliminado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error('❌ Error al eliminar usuario:', error);
    res.status(500).json({ mensaje: 'Error al eliminar el usuario' });
  }
});

// ========================================
// GET: perfil de usuario
// ========================================
router.get('/perfil/:id', async (req, res) => {
  try {
    const datos = await DatosUsuario.findOne({ usuario: req.params.id });
    if (!datos) {
      return res.status(404).json({ mensaje: 'Datos del usuario no encontrados' });
    }
    res.json({ nombre: datos.nombre });
  } catch (error) {
    console.error('❌ Error al obtener datos del usuario:', error);
    res.status(500).json({ mensaje: 'Error al obtener datos del usuario' });
  }
});

// ========================================
// GET: usuario por ID (general)
// ========================================
router.get('/detalle/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    res.json({
      nombre: usuario.nombre,
      email: usuario.email
    });
  } catch (err) {
    console.error('❌ Error al buscar usuario:', err);
    res.status(500).json({ error: 'Error al buscar usuario' });
  }
});

module.exports = router;





