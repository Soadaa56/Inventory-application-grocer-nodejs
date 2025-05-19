const { Router } = require("express")
const inventoryRouter = Router()
const inventoryController = require("../controllers/inventoryController")
const expressAsyncHandler = require("express-async-handler")

inventoryRouter.get("/", inventoryController.getInventoryIndex)

inventoryRouter.get("/products/new", inventoryController.getProductsNewForm)
// Trying this way of wrapping handler, and will commit to all being done the same in next session
inventoryRouter.get("/products/edit/:productId", expressAsyncHandler(inventoryController.getProductsEditFormWithId))

inventoryRouter.get("/shipment/new", inventoryController.getShipmentNewForm)

module.exports = inventoryRouter