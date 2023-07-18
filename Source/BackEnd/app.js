const multer = require('multer')
const imovelRouter = require('./Routes/imoveisRoutes.js')
const imagemRouter = require('./Routes/imagemRoutes.js')
const compradorRouter = require('./Routes/compradorRoutes.js')
const transacaoRouter = require('./Routes/transacaoRoutes.js')
const path = require('path');

const express = require('express');
const { json } = require('body-parser');
const authRouter = require('./Routes/autenticacaoRoutes');
const cors = require('cors');

const app = express();


app.use(json());

app.use(cors({
  origin: 'http://localhost:8080',
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.options('*', cors())

app.all('', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  req.header("Access-Control-Allow-Origin", "http://localhost");
  req.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  //Auth Each API Request created by user.
  next();
});
// Configuração do multer para o upload de arquivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("imagem");

app.use((req, res, next) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "Erro ao fazer o upload da imagem." });
    } else if (err) {
      return res.status(500).json({ error: "Erro interno no servidor." });
    }
    next();
  });
});
app.use('/', imovelRouter);
app.use('/upload',upload, imagemRouter);
app.use('/', transacaoRouter)

app.use('/',compradorRouter)
app.use('/', authRouter);
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
