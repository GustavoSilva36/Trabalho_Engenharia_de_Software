const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AutenticacaoRepositories = require('../Repositories/autenticacaoRepositories');


async function authenticateUser(user) {
  if (!user.email) {
    throw new Error('O email é obrigatório!');
  }

  if (!user.password) {
    throw new Error('A senha é obrigatória');
  }

  const existingUser = await AutenticacaoRepositories.getUserByEmail(user.email);
  if (!existingUser) {
    throw new Error('Nenhum email cadastrado');
  }

  const passwordMatch = await bcrypt.compare(user.password, existingUser.password);
  if (!passwordMatch) {
    throw new Error('Senha inválida');
  }

  const secret = process.env.SECRET;
  const token = jwt.sign({ email: user.email }, secret);
  console.log(token);
  return {token: token, tipoUsuario: existingUser.tipoUsuario};
}

async function getUserByEmail(email) {
  const user = await AutenticacaoRepositories.getUserByEmail(email);
  return user;
}

module.exports = {
  authenticateUser,
  getUserByEmail,
};
