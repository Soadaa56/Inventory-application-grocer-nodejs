const { Router } = require("express")
const suppliersRouter = Router()
const suppliersController = require("../controllers/suppliersController")

suppliersRouter.get("/", suppliersController.getAllSuppliers)

module.exports = suppliersRouter