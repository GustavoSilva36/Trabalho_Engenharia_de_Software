const express = require('express');
const { json } = require('body-parser');
const authRoutes = require('./Routes/autenticacaoRoutes');

const app = express();

app.use(json());

app.use('/', authRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
