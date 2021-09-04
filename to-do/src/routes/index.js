const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "titulo": "API - Reprograma",
        "version": "1.0.0",
        "mensagem": "Bem vindo(a), fique à vontade!"
    })
})
module.exports = router