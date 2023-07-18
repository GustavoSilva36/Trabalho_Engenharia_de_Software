const compradorServices = require('../Services/compradorServices.js')

async function cadastrarComprador(req, res) {
    const cadastro = req.body;
    
    if (!cadastro.email) {
        res.status(400).json({msg:'O email é obrigatório!'});
    }
    
    if (!cadastro.password) {
        res.status(400).json({msg:'A senha é obrigatória'});
    }
    
    if (cadastro.password !== cadastro.confirmPassword) {
        res.status(400).json({msg:'As senhas são diferentes'});
    }
    if(cadastro.cpf==undefined || cadastro.cpf==null || cadastro.cpf==""){
		return res.status(400).json({ error: "Cpf não pode ser vazio" });
	}else if(cadastro.nome==undefined || cadastro.nome==null || cadastro.nome==""){
		return res.status(400).json({ error: "Nome não pode ser vazio" });
	}else if(cadastro.dataNasc==undefined || cadastro.dataNasc==null || cadastro.dataNasc==""){
		return res.status(400).json({ error: "Data de Nascimento não pode ser vazia" });
	}else if(cadastro.telefone==undefined || cadastro.telefone==null || cadastro.telefone==""){
		return res.status(400).json({ error: "Telefone não pode ser vazio" });
	}else{
        try {
            await compradorServices.cadastrarComprador(cadastro);
            res.status(200).json({ msg: 'Usuário criado com sucesso' });
          } catch (error) {
            res.status(500).json({ msg: 'Houve um erro no servidor' });
            console.log(error);
          }
    }
    
  }
async function getComprador(req, res) {
    //recebendo dados
	const email = req.params.email
	
	//validação
	if(email==undefined || email==null || email==""){
	   res.send("Email não pode ser vazio");
	}else{
		res.send(await compradorServices.getComprador(email));
	}
}

async function getAllCompradores(req, res) {
	res.send (await compradorServices.getAllCompradores())
}

async function deletarComprador(req,res){
    const email = req.params.email;

	//validação
	if(email==undefined || email==null || email==""){
	   res.send("Email não pode ser vazio")
	}else{
		res.send (await compradorServices.deletarComprador(email))
	}
}

async function updateComprador(req, res) {
	const cpf = req.params.cpf
	const comprador = req.body.comprador
		
	res.send(await compradorServices.updateComprador(cpf,comprador))

}


  module.exports = {cadastrarComprador,getAllCompradores,getComprador,deletarComprador,updateComprador}