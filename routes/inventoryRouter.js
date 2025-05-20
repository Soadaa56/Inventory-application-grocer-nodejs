const { Router } = require("express")
const inventoryRouter = Router()
const inventoryController = require("../controllers/inventoryController")

inventoryRouter.get("/", inventoryController.getInventoryIndex)

inventoryRouter.get("/products/new", inventoryController.getProductsNewForm)

inventoryRouter.get("/products/edit/:productId", inventoryController.getProductsEditFormWithId)

inventoryRouter.get("/shipment/new", inventoryController.getShipmentNewForm)

module.exports = inventoryRouter