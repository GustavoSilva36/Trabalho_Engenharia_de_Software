const transacaoRepositories = require('../Repositories/transacaoRepositories')

async function cadastrarTransacao(transacao){
    
    const transacaoExistente = await transacaoRepositories.getTransacaoImovel(transacao.codImovel)
    if(transacaoExistente.length > 0){
        return "Erro: Imovel já pertencente há uma transação"
    }else{
        const novaTransacao = await transacaoRepositories.cadastrarTransacao(transacao)
        return novaTransacao;
    }
}

async function deletarTransacao(codTransacao){
    return ( await transacaoRepositories.deletarTransacao(codTransacao))
}

async function getAllTransacoes(){
    return ( await transacaoRepositories.getAllTransacoes() )
}

async function getTransacao(codTransacao){
    return ( await transacaoRepositories.getTransacao(codTransacao))
}

async function updateTransacao(codTransacao,transacao){
    var consultaTransacao = await getTransacao(codTransacao);
	
	if (consultaTransacao.length==0){
		return "Erro!!! Transação não existe."
	}
	return  await transacaoRepositories.updateTransacao(transacao, codTransacao) 
}


module.exports = {cadastrarTransacao,deletarTransacao,getAllTransacoes,getTransacao,updateTransacao}