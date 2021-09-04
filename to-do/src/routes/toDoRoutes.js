const express = require("express")
const router = express.Router()
const controller = require("../controllers/toDoController")

router.get("/", controller.getAll)

router.post("/cadastrar", controller.createTask)

router.get("/:id", controller.getById)

router.delete("/:id", controller.deleteTask)

router.put("/:id", controller.replacePost)

router.patch("/:atualizar", controller.atualizacao)

module.exports = router