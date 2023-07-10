const imagemServices = require ("../Services/imagemServices.js")

async function cadastrarImagemNoController(req, res) {
	try {
	  const imagemCadastrada = await imagemServices.cadastrarImagem(req);
	  return imagemCadastrada;
	} catch (err) {
	  console.error(err);
	  return res.status(500).json({ error: "Erro interno no servidor." });
	}
  }

  module.exports = {cadastrarImagemNoController}