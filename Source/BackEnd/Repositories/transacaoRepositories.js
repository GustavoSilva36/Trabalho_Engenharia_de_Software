const Transacao = require('../Models/Transacao')

async function cadastrarTransacao(transacao){
    try{
        const novaTransacao = await Transacao.create({
            codImovel: transacao.codImovel,
            cpfComprador: transacao.cpfComprador
        })

        return novaTransacao

    }catch(err){
        console.log(err)
        throw err
    }
        
}

async function getTransacaoImovel(codImovel) {
    try {
      const transacao = await Transacao.findAll({
        where: {codImovel},
      });
      return transacao;
    } catch (err) {
      
      console.log(err);
      throw err;
    } finally {
     
    }
  }


async function getAllTransacoes(){
    try{
        const transacoes = await Transacao.findAll({ order: [['dataHora', 'ASC']] })
        return transacoes
    }catch(err){
        console.log(err)
        throw err
    }
}

async function getTransacao(codTransacao){
    try{
        const transacao = await Transacao.findByPk(codTransacao)
        return transacao
    }catch(err){
        console.log(err)
        throw err
    }
}

async function deletarTransacao(codTransacao){
    try {
        await Transacao.destroy({where:{codTransacao}})
        console.log('Transação deletada com sucesso!');
      } catch (err) {
        console.log(err);
        throw err;
      } 
    
}

async function updateTransacao(transacao,codTransacao){
    try {
        await Transacao.update(transacao, { where: {codTransacao} });
        console.log('Transação atualizada com sucesso!');
    }catch(err){
        console.log(err);
        throw err;
    }
}

module.exports={cadastrarTransacao,deletarTransacao,getAllTransacoes,getTransacao,updateTransacao,getTransacaoImovel}