const { Sequelize } = require ('sequelize')

function conectarBanco() {
  const sequelize = new Sequelize('postgres', 'postgres', 'Mundo*45', {
    host: 'localhost',
    dialect: 'postgres',
  });

  try {
    // Test the connection
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  return sequelize;
}


module.exports =  {conectarBanco}
