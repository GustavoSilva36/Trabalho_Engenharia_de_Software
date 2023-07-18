const imoveisServices = require ("../Services/imoveisServices.js")


async function getAllImoveis(req, res) {
	res.send ( await imoveisServices.getAllImoveis() )
}

async function getImovel(req, res) {
	//recebendo dados
	const codimovel = req.params.codimovel

	
	//validação
	if(codimovel==undefined || codimovel==null || codimovel==""){
	   res.send("Codigo não pode ser vazio")
	}else{
		res.send ( await imoveisServices.getImovel(codimovel) )
	}
}

async function cadastrarImovel(req, res) {
	//capturar os dados
	const imovel = req.body.imovel;
	// console.log(req.body)
	console.log(imovel);
	//validação
	if(imovel.cep==undefined || imovel.cep==null || imovel.cep==""){
		return res.status(400).json({ error: "Cep não pode ser vazio" });
	}else if(imovel.logradouro==undefined || imovel.logradouro==null || imovel.logradouro==""){
		return res.status(400).json({ error: "Logradouro não pode ser vazio" });
	}else if(imovel.numero==undefined || imovel.numero==null || imovel.numero==""){
		return res.status(400).json({ error: "Número não pode ser vazio" });
	}else if(imovel.bairro==undefined || imovel.bairro==null || imovel.bairro==""){
		return res.status(400).json({ error: "Bairro não pode ser vazio" });
	}else if(imovel.cidade==undefined || imovel.cidade==null || imovel.cidade==""){
		return res.status(400).json({ error: "Cidade não pode ser vazio" });
	}else if(imovel.estado==undefined || imovel.estado==null || imovel.estado==""){
		return res.status(400).json({ error: "Estado não pode ser vazio" });
	}else if(imovel.preco==undefined || imovel.preco==null || imovel.preco==""){
		return res.status(400).json({ error: "Preço não pode ser vazio" });
	}else if(imovel.modelonegocio === undefined || imovel.modelonegocio === null) {
		return res.status(400).json({ error: "Campo 'modeloNegocio' é obrigatório" });
	}else if(imovel.tipodeimovel === undefined || imovel.tipodeimovel === null) {
		return res.status(400).json({ error: "Campo 'tipodeimovel' é obrigatório" });
	}else{
		try {
	  
			// Cadastrar o imóvel
			const novoImovel = await imoveisServices.cadastrarImovel(imovel);
			return res.json(novoImovel);
		  } catch (err) {
			console.error(err);
			return res.json({ error: "Erro interno no servidor." });
		  }
	}
}

async function deletarImovel(req, res) {
	const codimovel = req.params.codimovel;

	//validação
	if(codimovel==undefined || codimovel==null || codimovel==""){
	   res.send("Codigo não pode ser vazio")
	}else{
		res.send ( await imoveisServices.deletarImovel(codimovel) )
	}
}

async function updateImovel(req, res) {
	const codimovel = req.params.codimovel
	const imovel = req.body.imovel
	console.log(imovel);
		
	res.send( await imoveisServices.updateImovel(codimovel,imovel))
}

module.exports = {getAllImoveis, getImovel, cadastrarImovel, 
               deletarImovel, updateImovel}

