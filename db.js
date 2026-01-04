
// Para conectar mongo con node.js

const mongoose = require('mongoose');

if (!process.env.MONGO_URI) {
  console.error('❌ MONGO_URI NO está definida en variables de entorno');
  process.exit(1);
}

const URI = process.env.MONGO_URI;

console.log('📌 Conectando a MongoDB Atlas...');
console.log('📌 URI usada:', URI.replace(/\/\/.*@/, '//<user>:<password>@'));

mongoose.connect(URI, {
  serverSelectionTimeoutMS: 10000,
})
.then(() => {
  console.log('✅ Conectado a MongoDB Atlas correctamente');
})
.catch(err => {
  console.error('❌ Error al conectar a MongoDB Atlas:', err);
  process.exit(1);
});

module.exports = mongoose;

