const express = require('express');
const app = express();
const path = require('path');

// Configurar el motor de vistas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'public', 'views'));

// Ruta para renderizar la página disponibilidad.hbs
app.get('/', (req, res) => {
  res.render('disponibilidad');
});

// Ruta para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});