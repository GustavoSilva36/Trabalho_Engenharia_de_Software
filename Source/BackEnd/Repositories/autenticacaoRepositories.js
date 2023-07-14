const Autenticacao = require('../Models/Autenticacao');

async function getUserByEmail(email) {
  const user = await Autenticacao.findOne({
    where: { email: email },
  });
  return user;
}
module.exports = {
  getUserByEmail,
};
