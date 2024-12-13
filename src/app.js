const express = require('express');
const bodyParser = require('body-parser');
const asignacionRoutes = require('./routes/asignacionRoutes');
const territorioRoutes = require('./routes/territorioRoutes');
const responsableRoutes = require('./routes/responsableRoutes');
const manzanaRoutes = require('./routes/manzanaRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/asignaciones', asignacionRoutes);
app.use('/api/territorios', territorioRoutes);
app.use('/api/responsables', responsableRoutes);
app.use('/api/manzanas', manzanaRoutes);

const sequelize = require('./config/database');

const startServer = async () => {
  try {
    // Verificar conexión a la base de datos
    await sequelize.authenticate();
    console.log('Conexión establecida con la base de datos.');

    app.listen(3000, () => {
      console.log('Servidor ejecutándose en http://localhost:3000');
    });
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
};

startServer();