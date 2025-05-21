const { Router } = require("express")
const inventoryRouter = Router()
const inventoryController = require("../controllers/inventoryController")

inventoryRouter.get("/", inventoryController.getInventoryIndex)

inventoryRouter.get("/products/edit/:productId", inventoryController.getProductsEditFormWithId)
inventoryRouter.post("/products/edit/:productId", inventoryController.postProductsEditForm)
inventoryRouter.delete("/products/edit/:productId", inventoryController.deleteProduct)

inventoryRouter.get("/shipment/new", inventoryController.getShipmentNewForm)

module.exports = inventoryRouter