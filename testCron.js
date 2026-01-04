const cron = require('node-cron');

// Obtener hora actual en Santiago
const now = new Date();
const santiagoHour = now.toLocaleString("es-CL", { timeZone: "America/Santiago" });
console.log("Hora actual en Santiago:", santiagoHour);

// Calcular minuto de prueba (2 minutos después)
let testMinute = (now.getMinutes() + 2) % 60;
let testHour = now.getHours();
if (now.getMinutes() >= 58) {
  // Ajuste si pasamos a la siguiente hora
  testHour = (testHour + 1) % 24;
}

const cronString = `${testMinute} ${testHour} * * *`;
console.log("Cron string de prueba:", cronString);

cron.schedule(cronString, () => {
  console.log("✅ ¡Prueba de reinicio de hidratación ejecutada!");
}, {
  timezone: "America/Santiago"
});
