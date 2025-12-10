"use strict";

var express = require('express');

var router = express.Router();

var Usuario = require('../models/usuario');

var DatosUsuario = require('../models/DatosUsuario');

var _require = require('../sessionService'),
    createSession = _require.createSession; // Ruta de prueba para verificar que funciona


router.get('/', function _callee(req, res) {
  var usuarios;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Usuario.find());

        case 3:
          usuarios = _context.sent;
          // Busca todos los usuarios
          res.json(usuarios); // Envía resultado como JSON

          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.status(500).json({
            mensaje: 'Error al obtener los usuarios'
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // Registro de usuario

router.post('/register', function _callee2(req, res) {
  var _req$body, email, contraseña, usuarioExistente, nuevoUsuario;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, contraseña = _req$body.contraseña;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Usuario.findOne({
            email: email
          }));

        case 4:
          usuarioExistente = _context2.sent;

          if (!usuarioExistente) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            mensaje: 'El correo ya está registrado'
          }));

        case 7:
          nuevoUsuario = new Usuario({
            email: email,
            contraseña: contraseña
          });
          _context2.next = 10;
          return regeneratorRuntime.awrap(nuevoUsuario.save());

        case 10:
          res.status(201).json({
            mensaje: 'Usuario registrado correctamente'
          });
          _context2.next = 16;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            mensaje: 'Error en el servidor'
          });

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 13]]);
}); // Login de usuario

router.post('/login', function _callee3(req, res) {
  var _req$body2, email, password, usuario, datos;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          console.log('Login request:', email, password);
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(Usuario.findOne({
            email: email
          }));

        case 5:
          usuario = _context3.sent;
          console.log('Usuario encontrado:', usuario);

          if (usuario) {
            _context3.next = 9;
            break;
          }

          return _context3.abrupt("return", res.status(401).json({
            mensaje: 'Credenciales inválidas - usuario no existe'
          }));

        case 9:
          console.log('Contraseña en DB:', usuario.contraseña);

          if (!(usuario.contraseña !== password)) {
            _context3.next = 12;
            break;
          }

          return _context3.abrupt("return", res.status(401).json({
            mensaje: 'Credenciales inválidas - contraseña incorrecta'
          }));

        case 12:
          _context3.next = 14;
          return regeneratorRuntime.awrap(DatosUsuario.findOne({
            usuario: usuario._id
          }));

        case 14:
          datos = _context3.sent;

          if (datos) {
            _context3.next = 17;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            mensaje: 'Datos del usuario no encontrados'
          }));

        case 17:
          // ✅ Crear sesión en memoria usando el ID del usuario
          createSession(usuario._id.toString());
          res.status(200).json({
            mensaje: 'Login exitoso',
            usuarioId: usuario._id,
            email: usuario.email,
            nombre: datos.nombre
          });
          _context3.next = 25;
          break;

        case 21:
          _context3.prev = 21;
          _context3.t0 = _context3["catch"](2);
          console.error(_context3.t0);
          res.status(500).json({
            mensaje: 'Error al iniciar sesión'
          });

        case 25:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 21]]);
}); // Actualizar usuario por ID

router.put('/:id', function _callee4(req, res) {
  var id, _req$body3, email, contraseña, usuarioActualizado;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _req$body3 = req.body, email = _req$body3.email, contraseña = _req$body3.contraseña;
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(Usuario.findByIdAndUpdate(id, {
            email: email,
            contraseña: contraseña
          }, {
            "new": true
          }));

        case 5:
          usuarioActualizado = _context4.sent;

          if (usuarioActualizado) {
            _context4.next = 8;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            mensaje: 'Usuario no encontrado'
          }));

        case 8:
          res.json({
            mensaje: 'Usuario actualizado',
            usuario: usuarioActualizado
          });
          _context4.next = 14;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](2);
          res.status(500).json({
            mensaje: 'Error al actualizar el usuario'
          });

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 11]]);
}); // Eliminar usuario por ID

router["delete"]('/:id', function _callee5(req, res) {
  var id, usuarioEliminado;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Usuario.findByIdAndDelete(id));

        case 4:
          usuarioEliminado = _context5.sent;

          if (usuarioEliminado) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            mensaje: 'Usuario no encontrado'
          }));

        case 7:
          res.json({
            mensaje: 'Usuario eliminado correctamente'
          });
          _context5.next = 13;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](1);
          res.status(500).json({
            mensaje: 'Error al eliminar el usuario'
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 10]]);
}); // Perfil
// Ruta específica primero

router.get('/perfil/:id', function _callee6(req, res) {
  var datos;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(DatosUsuario.findOne({
            usuario: req.params.id
          }));

        case 3:
          datos = _context6.sent;

          if (datos) {
            _context6.next = 6;
            break;
          }

          return _context6.abrupt("return", res.status(404).json({
            mensaje: 'Datos del usuario no encontrados'
          }));

        case 6:
          res.json({
            nombre: datos.nombre
          });
          _context6.next = 13;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          res.status(500).json({
            mensaje: 'Error al obtener datos del usuario'
          });

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 9]]);
}); // Ruta general después

router.get('/:id', function _callee7(req, res) {
  var usuario;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return regeneratorRuntime.awrap(Usuario.findById(req.params.id));

        case 3:
          usuario = _context7.sent;

          if (usuario) {
            _context7.next = 6;
            break;
          }

          return _context7.abrupt("return", res.status(404).json({
            error: 'Usuario no encontrado'
          }));

        case 6:
          res.json({
            nombre: usuario.nombre,
            email: usuario.email
          });
          _context7.next = 12;
          break;

        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](0);
          res.status(500).json({
            error: 'Error al buscar usuario'
          });

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
module.exports = router;