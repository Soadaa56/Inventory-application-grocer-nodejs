const { Router } = require("express")
const inventoryRouter = Router()
const inventoryController = require("../controllers/inventoryController")

inventoryRouter.get("/", inventoryController.getInventoryIndex)

inventoryRouter.get("/shipment/new", inventoryController.getShipmentNewForm)
inventoryRouter.get("/shipment/submit", inventoryController.getShipmentDetailsForm)

module.exports = inventoryRouter