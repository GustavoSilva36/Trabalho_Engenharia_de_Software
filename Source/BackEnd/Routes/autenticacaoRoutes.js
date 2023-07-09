const express = require('express');
const authController = require('../Controllers/autenticacaoController');
const { checkToken } = require('../checkToken.js')

const router = express.Router();

router.post('/auth/register',authController.registerUser);
router.post('/auth/user' ,authController.authenticateUser);

module.exports = router;