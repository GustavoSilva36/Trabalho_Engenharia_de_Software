const transacaoServices = require("../Services/transacaoServices.js")


async function getAllTransacoes(req, res) {
	res.send ( await transacaoServices.getAllTransacoes())
}

async function getTransacao(req, res) {
	//recebendo dados
	const codTransacao = req.params.codTransacao
	console.log(codTransacao)
	//validação
	if(codTransacao==undefined || codTransacao==null || codTransacao==""){
	   res.send("Codigo da transacao não pode ser vazio")
	}else{
		res.send ( await transacaoServices.getTransacao(codTransacao) )
	}
}

async function cadastrarTransacao(req, res) {
	//capturar os dados
	const transacao = req.body.transacao;
	//validação
	if(transacao.codImovel==undefined || transacao.codImovel==null || transacao.codImovel==""){
		return res.status(400).json({ error: "codImovel não pode ser vazio" });
	}else if(transacao.cpfComprador==undefined || transacao.cpfComprador==null || transacao.cpfComprador==""){
		return res.status(400).json({ error: "Cpf do Comprador não pode ser vazio" });
	}else{
		try {
			const novaTransacao = await transacaoServices.cadastrarTransacao(transacao);
			return res.json(novaTransacao);
		  } catch (err) {
			console.error(err);
			return res.json({ error: "Erro interno no servidor." });
		  }
	}
}

async function deletarTransacao(req, res) {
	const codTransacao = req.params.codTransacao;

	//validação
	if(codTransacao==undefined || codTransacao==null || codTransacao==""){
	   res.send("Codigo da Transacao não pode ser vazio")
	}else{
		res.send ( await transacaoServices.deletarTransacao(codTransacao) )
	}
}

async function updateTransacao(req, res) {
	const codTransacao = req.params.codTransacao
	const transacao = req.body.transacao
		
	res.send( await transacaoServices.updateTransacao(codTransacao,transacao))
}

module.exports = {getAllTransacoes,getTransacao,cadastrarTransacao,deletarTransacao,updateTransacao}

