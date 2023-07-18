const express = require ("express")
const transacaoController = require ("../Controllers/transacaoController.js")
const { checkToken } = require('../checkToken.js')

const router = express.Router()

router.post('/transacao', transacaoController.cadastrarTransacao)
router.get('/transacao', transacaoController.getAllTransacoes )
router.get('/transacao/:codTransacao' ,transacaoController.getTransacao )
router.delete('/transacao/:codTransacao', transacaoController.deletarTransacao)
router.put('/transacao/:codTransacao',transacaoController.updateTransacao )


module.exports =  router;