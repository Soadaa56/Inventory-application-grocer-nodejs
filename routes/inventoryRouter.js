const { Router } = require("express")
const inventoryRouter = Router()
const inventoryController = require("../controllers/inventoryController")

inventoryRouter.get("/", inventoryController.getInventoryIndex)

inventoryRouter.get("/shipment/new", inventoryController.getShipmentNewForm)
inventoryRouter.get("/shipment/submit", inventoryController.getShipmentDetailsForm)
inventoryRouter.post("/shipment/submit", inventoryController.postShipmentDetailsForm)
inventoryRouter.get("/shipment/:id", inventoryController.getShipmentOrderById)

inventoryRouter.get("/shipments/all", inventoryController.getAllShipments)

inventoryRouter.get("/stock", inventoryController.getInventoryStock)

module.exports = inventoryRouter