const  {DataTypes} = require ('sequelize')
const conectarBanco = require ('./BD.js')


const sequelize = conectarBanco.conectarBanco();

const Image = sequelize.define('Image', {
    name: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.BLOB,
    },
    contentType: {
      type: DataTypes.STRING,
    },
  });
  

const Imovel = sequelize.define('imoveis', {
  codimovel: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cep: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  logradouro: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  complemento: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  bairro: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  preco: {
    type: DataTypes.NUMERIC,
    allowNull: false,
  },
  modelonegocio: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  tipodeimovel: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
}, {
  tableName: 'imoveis',
  timestamps : false,
  createdAt : false,
  updatedAt : false
});

Imovel.hasMany(Image, { foreignKey: 'imovelId' });
Image.belongsTo(Imovel, { foreignKey: 'codimovel', onDelete: 'cascade'});

sequelize.sync();

async function cadastrarImagemNoBanco(imagem,codimovel) {
    try {
      const novaImagem = await Image.create({
        name: imagem.name,
        data: imagem.data,
        contentType: imagem.contentType,
        codimovel: codimovel
      });
  
      return novaImagem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

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
    const novoImovel = await Imovel.create({
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
    return novoImovel;
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
  deletarImovel,
  cadastrarImagemNoBanco
};
