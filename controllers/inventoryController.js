const db = require("../db/queries")
const expressAsyncHandler = require("express-async-handler")

const getInventoryIndex = expressAsyncHandler(async (req, res) => {
  res.render("inventory/index", {
    title: "Inventory Managment"
  })
})

const getShipmentNewForm = expressAsyncHandler(async (req, res) => {
  const suppliers = await db.getAllSuppliers()

  res.render("inventory/shipmentNewForm", {
    title: "New Shipment Registry",
    suppliers
  })
})

module.exports = {
  getInventoryIndex,
  getShipmentNewForm
}