const { Router } = require("express")
const apiRouter = Router()
const apiController = require("../controllers/apiController")

apiRouter.get("/products", apiController.fetchAllProductsWithSupplierId)

module.exports = apiRouter