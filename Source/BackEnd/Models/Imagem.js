require('dotenv').config();
const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbName, dbUser, dbPassword,{
  host: 'localhost',
  dialect: 'postgres'
});

class Imagem extends Model {}


Imagem.init(
    {
    name: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.BLOB,
    },
    contentType: {
      type: DataTypes.STRING,
    }
    },
    {
    sequelize,
    modelName: 'imagem',
    tableName: 'imagem',
    timestamps: false,
    updatedAt: false
});

Imagem.sync();

  module.exports = Imagem;