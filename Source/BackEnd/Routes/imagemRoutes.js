const express = require ("express")
const imagemController = require ("../Controllers/imagemController.js")
const { checkToken } = require('../checkToken.js')

const router = express.Router()

router.post('/', imagemController.cadastrarImagemNoController )


module.exports =  router;