const express = require('express');
const { json } = require('body-parser');
const authRoutes = require('./Routes/autenticacaoRoutes');
const cors = require('cors');
const corsConfig = require('./expressConfig')

const app = express();

app.use(json());

app.use(cors({
  origin: 'http://localhost:8080',
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.options('*', cors())

app.all('', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  //Auth Each API Request created by user.
  next();
});

app.use('/', authRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
