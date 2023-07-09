const imoveisRepositores = require ("../Repositories/imoveisRepositories.js")



// Configuração do multer para lidar com o upload da imagem

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
      const imagemCadastrada = await imoveisRepositores.cadastrarImagemNoBanco(imagem);
      resolve(imagemCadastrada);
    } catch (err) {
      reject(err);
    }
  });
}
async function getAllImoveis() {
	return ( await imoveisRepositores.getAllImoveis() )
}

async function getImovel(codimovel) {
	return ( await imoveisRepositores.getImovel(codimovel) )
}

async function deletarImovel(codimovel) {
	return ( await imoveisRepositores.deletarImovel(codimovel) )
}
// async function getImovelEndereco(logradouro, numero, bairro, cidade, estado) {
//     return ( await imoveisRepositores.getImovelEndereco(logradouro, numero, bairro, cidade, estado))
// }

async function cadastrarImovel( imovel,imagem) {

	const consultaImovel = await imoveisRepositores.getImovelEndereco(
        imovel.logradouro,
        imovel.numero,
        imovel.bairro,
        imovel.cidade,
        imovel.estado
    );

    if (consultaImovel.length > 0) {
        return "Erro: Imóvel com o mesmo endereço já existe";
    }
	const novoImovel = await imoveisRepositores.cadastrarImovel(imovel);

  return novoImovel;
}
async function updateImovel(codimovel, imovel) {
	var consultaimovel = await getImovel(codimovel);
	
	if (consultaimovel.length==0){
		return "Erro!!! Imovel não existe."
	}
	return  await imoveisRepositores.updateImovel(codimovel, imovel) 
}


module.exports = {getAllImoveis, getImovel, cadastrarImovel, 
    deletarImovel, updateImovel,cadastrarImagem}


