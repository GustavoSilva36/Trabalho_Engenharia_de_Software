const Autenticacao = require('../Models/Autenticacao');

async function getUserByEmail(email) {
  const user = await Autenticacao.findOne({
    where: { email: email },
  });
  return user;
}

async function createUser(userData) {
  await Autenticacao.create(userData);
}

module.exports = {
  getUserByEmail,
  createUser,
};
