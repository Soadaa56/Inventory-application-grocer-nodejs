const { Router } = require("express")
const productsRouter = Router()
const productsController = require("../controllers/productsController")

productsRouter.get("/", productsController.getAllProducts)

productsRouter.get("/new", productsController.getNewProductForm)
productsRouter.post("/new", productsController.postNewProduct)

productsRouter.get("/show/:productId", productsController.getProduct)

productsRouter.get("/edit/:productId", productsController.getProductsEditFormWithId)
productsRouter.post("/edit/:productId", productsController.postProductsEditForm)
productsRouter.delete("/edit/:productId", productsController.deleteProduct)

module.exports = productsRouter