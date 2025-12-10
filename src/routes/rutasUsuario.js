const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const DatosUsuario = require('../models/DatosUsuario');
const { createSession } = require('../sessionService'); 


// Ruta de prueba para verificar que funciona
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find(); // Busca todos los usuarios
    res.json(usuarios); // Envía resultado como JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los usuarios' });
  }
});


// Registro de usuario
router.post('/register', async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    // Verificar si ya existe el usuario
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El correo ya está registrado' });
    }

    const nuevoUsuario = new Usuario({ email, contraseña });
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});



// Login de usuario

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login request:', email, password);

  try {
    const usuario = await Usuario.findOne({ email });
    console.log('Usuario encontrado:', usuario);

    if (!usuario) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas - usuario no existe' });
    }

    console.log('Contraseña en DB:', usuario.contraseña);

    if (usuario.contraseña !== password) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas - contraseña incorrecta' });
    }

    const datos = await DatosUsuario.findOne({ usuario: usuario._id });

    if (!datos) {
      return res.status(404).json({ mensaje: 'Datos del usuario no encontrados' });
    }

    // ✅ Crear sesión en memoria usando el ID del usuario
    createSession(usuario._id.toString());

    res.status(200).json({
      mensaje: 'Login exitoso',
      usuarioId: usuario._id,
      email: usuario.email,
      nombre: datos.nombre
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al iniciar sesión' });
  }
});



// Actualizar usuario por ID
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
    res.status(500).json({ mensaje: 'Error al actualizar el usuario' });
  }
});




// Eliminar usuario por ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);

    if (!usuarioEliminado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el usuario' });
  }
});



// Perfil

// Ruta específica primero
router.get('/perfil/:id', async (req, res) => {
  try {
    const datos = await DatosUsuario.findOne({ usuario: req.params.id });
    if (!datos) {
      return res.status(404).json({ mensaje: 'Datos del usuario no encontrados' });
    }
    res.json({ nombre: datos.nombre });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener datos del usuario' });
  }
});

// Ruta general después
router.get('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    res.json({
      nombre: usuario.nombre,
      email: usuario.email
    });
  } catch (err) {
    res.status(500).json({ error: 'Error al buscar usuario' });
  }
});

module.exports = router;




