const { Router } = require("express")
const categoriesRouter = Router()
const categoriesController = require("../controllers/categoriesController")

categoriesRouter.get("/", categoriesController.getAllCategories)

categoriesRouter.get("/new", categoriesController.getNewCategory)
categoriesRouter.post("/new", categoriesController.postNewCategory)

categoriesRouter.get("/edit/:categoryId", categoriesController.getCategory)

categoriesRouter.get("/show/:category", categoriesController.getProductsWithCategory)

module.exports = categoriesRouter