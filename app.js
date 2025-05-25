
const express = require('express');
const app = express();
const path = require('path');

//Para leer archivos estáticos
app.use('/assets', express.static('assets'));
app.use('/views', express.static('views'));

// Ruta para servir index.html desde /views o donde lo tengas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const alumnosRouter = require('./routes/alumnos');

app.use('/alumnos', alumnosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
