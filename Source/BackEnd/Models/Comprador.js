require('dotenv').config();
const Autenticao = require('./Autenticacao')
const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const { Sequelize, Model, DataTypes } = require('sequelize');


const sequelize = new Sequelize(dbName, dbUser, dbPassword,{
    host: 'localhost',
    dialect: 'postgres'
});

class Comprador extends Model{}

Comprador.init({
    cpf:{
        type: DataTypes.STRING(14),
        primaryKey:true,
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull:false
    },
    dataNasc:{
        type: DataTypes.DATE,
        allowNull:false
    },
    telefone:{
        type:DataTypes.STRING(14),
        allowNull:false
    }
},
{
    sequelize,
    modelName: 'comprador',
    tableName: 'comprador',
    timestamps: false,
    updatedAt: false    
}
)

Comprador.belongsTo(Autenticao,{
    constraints:true,
    foreignKey:'email',
    onDelete:'cascade',
})

Comprador.sync();

module.exports = Comprador;