const Imovel = require('../Models/Imovel.js');




async function getAllImoveis() {
  try {
    const imoveis = await Imovel.findAll({ order: [['preco', 'ASC']] });
    return imoveis;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
  }
}

async function cadastrarImovel(imovel) {
  try {
      await Imovel.create({
      cep: imovel.cep,
      logradouro: imovel.logradouro,
      numero: imovel.numero,
      complemento: imovel.complemento,
      bairro: imovel.bairro,
      cidade: imovel.cidade,
      estado: imovel.estado,
      preco: imovel.preco,
      modelonegocio: imovel.modelonegocio,
      tipodeimovel: imovel.tipodeimovel,
    });
    return "Imovel Cadastrado com sucesso";
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
   
  }
}

async function getImovelEndereco(logradouro, numero, bairro, cidade, estado) {
  try {
    const imoveis = await Imovel.findAll({
      where: { logradouro, numero, bairro, cidade, estado },
    });
    return imoveis;
  } catch (err) {
    
    console.log(err);
    throw err;
  } finally {
   
  }
}

async function getImovel(codimovel) {
  try {
    const imovel = await Imovel.findByPk(codimovel);
    return imovel;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    
  }
}

async function updateImovel(codimovel, imovel) {
  try {
    await Imovel.update(imovel, { where: { codimovel } });
    console.log('Imóvel atualizado com sucesso!');
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    
  }
}

async function deletarImovel(codimovel) {
  try {
    await Imovel.destroy({ where: { codimovel } });
    console.log('Imóvel deletado com sucesso!');
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    
  }
}

module.exports = {
  getAllImoveis,
  cadastrarImovel,
  getImovelEndereco,
  getImovel,
  updateImovel,
  deletarImovel
};
