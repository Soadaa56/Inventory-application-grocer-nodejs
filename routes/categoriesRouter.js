const { Router } = require("express")
const categoriesRouter = Router()
const categoriesController = require("../controllers/categoriesController")

categoriesRouter.get("/", categoriesController.getAllCategories)
categoriesRouter.get("/show/:category", categoriesController.getProductsWithCategory)

module.exports = categoriesRouter