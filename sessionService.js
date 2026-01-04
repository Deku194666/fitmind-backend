


// sessionService.js

// Temporal: almacenamiento de sesiones en memoria
// Para producción, reemplazar por MongoDB o Redis
const sessions = {};

/**
 * Crear una nueva sesión para un usuario
 * @param {string} userId 
 */
function createSession(userId) {
    sessions[userId] = { lastActivity: Date.now() };
}

/**
 * Obtener la sesión activa de un usuario
 * @param {string} userId 
 * @returns {object|null}
 */
function getSession(userId) {
    return sessions[userId] || null;
}

/**
 * Actualizar la última actividad de un usuario
 * @param {string} userId 
 */
function updateSessionActivity(userId) {
    if (sessions[userId]) {
        sessions[userId].lastActivity = Date.now();
    }
}

/**
 * Destruir sesión de un usuario
 * @param {string} userId 
 */
function destroySession(userId) {
    delete sessions[userId];
}

module.exports = {
    createSession,
    getSession,
    updateSessionActivity,
    destroySession
};
