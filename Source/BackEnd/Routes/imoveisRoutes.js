const express = require ("express")
const imoveisController = require ("../Controllers/imoveisController.js")


const router = express.Router()

router.post('/imovel', imoveisController.cadastrarImovel )
router.get('/imovel', imoveisController.getAllImoveis )
router.get('/imovel/:codimovel', imoveisController.getImovel )
router.delete('/imovel/:codimovel', imoveisController.deletarImovel)
router.put('/imovel/:codimovel', imoveisController.updateImovel )


module.exports =  router;