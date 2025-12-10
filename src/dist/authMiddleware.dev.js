"use strict";

// authMiddleware.js
var _require = require('./sessionConfig'),
    SESSION_TIMEOUT = _require.SESSION_TIMEOUT;

var _require2 = require('./sessionService'),
    getSession = _require2.getSession,
    updateSessionActivity = _require2.updateSessionActivity,
    destroySession = _require2.destroySession;
/**
 * Middleware para verificar si la sesión está activa
 */


function checkSessionTimeout(req, res, next) {
  // Obtener userId desde headers, token JWT o como lo manejes
  var userId = req.headers['user-id']; // ejemplo: enviar userId en headers

  if (!userId) return res.status(401).send("No user ID provided");
  var session = getSession(userId);
  if (!session) return res.status(401).send("No active session");
  var now = Date.now();

  if (now - session.lastActivity > SESSION_TIMEOUT) {
    destroySession(userId); // cerrar sesión

    return res.status(401).send("Session expired");
  } // actualizar última actividad


  updateSessionActivity(userId);
  next(); // continuar con la ruta
}

module.exports = checkSessionTimeout;