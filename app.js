const express = require('express');
const _ = require('lodash');

const app = express();
const port = 3000;
const nombres = ['Ana', 'Luis', 'Ana'];

app.get('/', (_req, res) => {
  const nombresUnicos = _.uniq(nombres);
  res.json({
    mensaje: 'Servidor JavaScript funcionando',
    nombres: nombresUnicos,
  });
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
