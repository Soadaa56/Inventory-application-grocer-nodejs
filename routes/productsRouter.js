const { Router } = require("express")
const productsRouter = Router()
const productsController = require("../controllers/productsController")

productsRouter.get("/", productsController.getAllProducts)

productsRouter.get("/new", productsController.getNewProductForm)
productsRouter.post("/new", productsController.postNewProduct)

productsRouter.get("/show/:productId", productsController.getProduct)

module.exports = productsRouter