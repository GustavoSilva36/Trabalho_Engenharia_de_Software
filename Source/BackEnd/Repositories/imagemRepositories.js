const Imagem = require('../Models/Imagem.js');


async function cadastrarImagemNoBanco(imagem) {
    try {
      const novaImagem = await Imagem.create({
        name: imagem.name,
        data: imagem.data,
        contentType: imagem.contentType,
      });
  
      return novaImagem;
    } catch (error) {
      console.log(error);
      throw error;
    }
}

module.exports = {cadastrarImagemNoBanco}