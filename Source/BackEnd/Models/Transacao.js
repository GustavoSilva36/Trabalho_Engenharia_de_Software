require('dotenv').config();
const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const { Sequelize, Model, DataTypes } = require('sequelize');

const Comprador = require('./Comprador')
const Imovel = require ('./Imovel')

const sequelize = new Sequelize(dbName, dbUser, dbPassword,{
    host: 'localhost',
    dialect: 'postgres'
});

class Transacao extends Model{}

Transacao.init({
    codTransacao:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    dataHora:{
        type:DataTypes.DATE,
        defaultValue: sequelize.literal(`CURRENT_TIMESTAMP`),
        allowNull:false
    }
    },
    {
        sequelize,
        modelName: 'transacao',
        tableName: 'transacao',
        timestamps: false,
        updatedAt: false
    }
)

Transacao.belongsTo(Comprador,{
    constraints:true,
    foreignKey:'cpfComprador',
    onDelete:'restrict'
})

Transacao.belongsTo(Imovel,{
    constraints:true,
    foreignKey:'codImovel',
    onDelete:'restrict'
})

Transacao.sync();

module.exports = Transacao;