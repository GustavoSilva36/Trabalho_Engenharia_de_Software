const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AutenticacaoRepositories = require('../Repositories/autenticacaoRepositories');

async function registerUser(cadastro) {
  if (!cadastro.email) {
    throw new Error('O email é obrigatório!');
  }

  if (!cadastro.password) {
    throw new Error('A senha é obrigatória');
  }

  if (cadastro.password !== cadastro.confirmPassword) {
    throw new Error('As senhas são diferentes');
  }

  const userExists = await AutenticacaoRepositories.getUserByEmail(cadastro.email);
  if (userExists) {
    throw new Error('E-mail já cadastrado');
  }

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(cadastro.password, salt);

  await AutenticacaoRepositories.createUser({
    email: cadastro.email,
    password: passwordHash,
    tipoConta: true,
  });
}

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
  return token;
}

async function getUserByEmail(email) {
  const user = await AutenticacaoRepositories.getUserByEmail(email);
  return user;
}

module.exports = {
  registerUser,
  authenticateUser,
  getUserByEmail,
};
