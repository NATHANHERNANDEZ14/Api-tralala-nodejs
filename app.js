const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/pruebafit', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión a MongoDB:', err));

// Rutas
app.use('/api/auth', authRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;