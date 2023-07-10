const imagemRepositores = require ("../Repositories/imagemRepositories.js")



async function cadastrarImagem(req) {
    return new Promise(async (resolve, reject) => {
      if (!req.file) {
        reject(new Error("Nenhum arquivo foi enviado."));
        return;
      }
  
      const imagem = {
        name: req.file.originalname,
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
  
      try {
        const imagemCadastrada = await imagemRepositores.cadastrarImagemNoBanco(imagem);
        resolve(imagemCadastrada);
      } catch (err) {
        reject(err);
      }
    });
  }

module.exports = {cadastrarImagem}