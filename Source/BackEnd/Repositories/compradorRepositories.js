const Comprador = require('../Models/Comprador')
const Autenticacao = require('../Models/Autenticacao')


async function cadastrarComprador(cadastrado,passwordHash){
    try {
        await Autenticacao.create({
            email:cadastrado.email,
            password: passwordHash,
            tipoConta: false
        })
    
    
        const novoComprador = await Comprador.create({
            cpf: cadastrado.cpf,
            nome: cadastrado.nome,
            dataNasc: cadastrado.dataNasc,
            telefone: cadastrado.telefone,
            email: cadastrado.email
        })
        return novoComprador;
      } catch (err) {
        console.log(err);
        throw err;
      }
}

async function getAllCompradores(){
    try{
        const compradores = await Comprador.findAll()
        return compradores;
    }
    catch (err) {
    console.log(err);
    throw err;
    } 
}

async function getComprador(email){
    try{
        const comprador = await Comprador.findOne({where: {email: email}})
        return comprador;
    }
    catch (err) {
    console.log(err);
    throw err;
    } 
}

async function deletarComprador(email) {
    try {
      await Autenticacao.destroy({ where: {email} });
      console.log('Comprador deletado com sucesso!');
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      
    }
  }

async function updateComprador(cpf,comprador){
    try {
        await Comprador.update(comprador, { where: {cpf} });
        console.log('Conta atualizado com sucesso!');
      } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = {cadastrarComprador,getAllCompradores,getComprador,deletarComprador,updateComprador,}