const imoveisRepositores = require ("../Repositories/imoveisRepositories.js")


async function getAllImoveis() {
	return ( await imoveisRepositores.getAllImoveis() )
}

async function getImovel(codimovel) {
	return ( await imoveisRepositores.getImovel(codimovel) )
}

async function deletarImovel(codimovel) {
	return ( await imoveisRepositores.deletarImovel(codimovel) )
}

async function cadastrarImovel(imovel) {

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
    deletarImovel, updateImovel}


