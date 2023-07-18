const express = require('express');
const compradorController = require('../Controllers/compradorController');
const { checkToken } = require('../checkToken.js')


const router = express.Router()

router.post('/comprador', compradorController.cadastrarComprador )
router.get('/comprador', checkToken,compradorController.getAllCompradores )
router.delete('/comprador/:email',compradorController.deletarComprador)
router.get('/comprador/:email', compradorController.getComprador ) 
router.put('/comprador/:cpf', checkToken,compradorController.updateComprador)

module.exports =  router;