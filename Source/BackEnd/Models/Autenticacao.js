require('dotenv').config();

const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbName, dbUser, dbPassword,{
  host: 'localhost',
  dialect: 'postgres'
});

class Autenticacao extends Model{}

Autenticacao.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipoConta: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'autenticacao',
    tableName: 'autenticacao',
    timestamps: false,
    createdAt: false,
    updatedAt: false
  }
);

Autenticacao.sync();

module.exports = Autenticacao;
