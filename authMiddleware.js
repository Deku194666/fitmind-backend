

// authMiddleware.js
const { SESSION_TIMEOUT } = require('./sessionConfig');
const { getSession, updateSessionActivity, destroySession } = require('./sessionService');

/**
 * Middleware para verificar si la sesión está activa
 */
function checkSessionTimeout(req, res, next) {
    // Obtener userId desde headers, token JWT o como lo manejes
    const userId = req.headers['user-id']; // ejemplo: enviar userId en headers
    if (!userId) return res.status(401).send("No user ID provided");

    const session = getSession(userId);
    if (!session) return res.status(401).send("No active session");

    const now = Date.now();
    if (now - session.lastActivity > SESSION_TIMEOUT) {
        destroySession(userId); // cerrar sesión
        return res.status(401).send("Session expired");
    }

    // actualizar última actividad
    updateSessionActivity(userId);
    next(); // continuar con la ruta
}

module.exports = checkSessionTimeout;
