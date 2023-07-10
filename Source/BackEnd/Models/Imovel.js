require('dotenv').config();
const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbName, dbUser, dbPassword,{
  host: 'localhost',
  dialect: 'postgres'
});

class Imovel extends Model {}

Imovel.init( 
    {
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
  }, 
  {
    sequelize,
    modelName: 'imoveis',
    tableName: 'imoveis',
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
  
  Imovel.sync();

  module.exports = Imovel;

  
 