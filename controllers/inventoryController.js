const db = require("../db/queries")
const expressAsyncHandler = require("express-async-handler")

const getInventoryIndex = expressAsyncHandler(async (req, res) => {
  res.render("inventory/index", {
    title: "Inventory Managment"
  })
})

const getShipmentNewForm = expressAsyncHandler(async (req, res) => {
  res.render("inventory/shipmentNewForm", {
    title: "New Shipment Registry"
  })
})

module.exports = {
  getInventoryIndex,
  getShipmentNewForm
}