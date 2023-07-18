const express = require ("express")
const imoveisController = require ("../Controllers/imoveisController.js")
const { checkToken } = require('../checkToken.js')

const router = express.Router()

router.post('/imovel', checkToken, imoveisController.cadastrarImovel )
router.get('/imovel', imoveisController.getAllImoveis )
router.get('/imovel/:codimovel', imoveisController.getImovel )
router.delete('/imovel/:codimovel', imoveisController.deletarImovel)
router.put('/imovel/:codimovel', checkToken, imoveisController.updateImovel )


module.exports =  router;