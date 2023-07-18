const compradorRepositories = require ('../Repositories/compradorRepositories.js')
const AutenticacaoRepositories = require('../Repositories/autenticacaoRepositories.js')
const bcrypt = require('bcrypt');


async function cadastrarComprador(cadastro) {
  
    const userExists = await AutenticacaoRepositories.getUserByEmail(cadastro.email);
    if (userExists) {
      throw new Error('E-mail já cadastrado');
    }
  
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(cadastro.password, salt);
  
    await compradorRepositories.cadastrarComprador(cadastro,passwordHash);
  }

async function getAllCompradores() {
	return ( await compradorRepositories.getAllCompradores() )
}

async function getComprador(email){
    return (await compradorRepositories.getComprador(email))
}

async function deletarComprador(email){
    return ( await compradorRepositories.deletarComprador(email) )
}


async function updateComprador(cpf, comprador) {
	var consultarComprador = await getComprador(comprador.email);
	
	if (consultarComprador.length==0){
		return "Erro!!! Comprador não existe."
	}
	return  await compradorRepositories.updateComprador(cpf, comprador) 
}


  module.exports = {cadastrarComprador,getAllCompradores,getComprador,deletarComprador,updateComprador}