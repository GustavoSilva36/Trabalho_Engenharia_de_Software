const jwt = require('jsonwebtoken');

function checkToken(req, res, next) {
  const authHeader = req.body.headers['Authorization'];
  const token = authHeader.split(' ')[1];
  
  
  console.log('------------------------------------');
  console.log(token);
  console.log(process.env.SECRET);
  console.log('------------------------------------');

  if (!token) {
    return res.status(401).json({ msg: 'Acesso Negado' });
  }

  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);
    next();
  } catch (err) {
    res.status(404).json({ msg: 'Token Inválido' });
  }
}

module.exports = {
  checkToken
};