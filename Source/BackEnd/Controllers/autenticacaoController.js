const authServices = require('../Services/autenticacaoServices');

async function authenticateUser(req, res) {
  const user = req.body;

  try {
    const usuario = await authServices.authenticateUser(user);
    res.status(200).json({ msg: 'Autenticado com sucesso', token: usuario.token, tipoUsuario: usuario.tipoUsuario});
  } catch (error) {
    res.send(404).json({ msg: 'Houve um erro no servidor' }); 
    console.log(error);
  }
}

async function getUserByEmail(req, res) {
  const email = req.params.email;

  try {
    const user = await authServices.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ msg: 'Usuário não encontrado' });
    }
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(500).json({ msg: 'Houve um erro no servidor' });
    console.log(error);
  }
}

module.exports = {
  authenticateUser,
  getUserByEmail,
};