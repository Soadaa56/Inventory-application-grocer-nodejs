const { Router } = require("express")
const suppliersRouter = Router()
const suppliersController = require("../controllers/suppliersController")

suppliersRouter.get("/", suppliersController.getAllSuppliers)

suppliersRouter.get("/new", suppliersController.getNewSupplier)
suppliersRouter.post("/new", suppliersController.postNewSupplier)

suppliersRouter.get("/show/:supplier", suppliersController.getProductsWithSupplier)

module.exports = suppliersRouter