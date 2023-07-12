const express = require ("express")
const imoveisController = require ("../Controllers/imoveisController.js")
const { checkToken } = require('../checkToken.js')

const router = express.Router()

router.post('/imovel', checkToken, imoveisController.cadastrarImovel )
router.get('/imovel', checkToken,imoveisController.getAllImoveis )
router.get('/imovel/:codimovel', checkToken,imoveisController.getImovel )
router.delete('/imovel/:codimovel', checkToken,imoveisController.deletarImovel)
router.put('/imovel/:codimovel', checkToken,imoveisController.updateImovel )


module.exports =  router;