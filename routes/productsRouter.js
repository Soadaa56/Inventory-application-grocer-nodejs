const { Router } = require("express")
const productsRouter = Router()
const productsController = require("../controllers/productsController")

productsRouter.get("/", productsController.getAllProducts)

productsRouter.get("/show/:productId", productsController.getProduct)

module.exports = productsRouter