const db = require("../db/queries")
const expressAsyncHandler = require("express-async-handler")

const getInventoryIndex = expressAsyncHandler(async (req, res) => {
  res.render("inventory/index", {
    title: "Inventory Managment"
  })
})

const getProductsNewForm = expressAsyncHandler(async (req, res) => {
  res.render("inventory/productsForm", {
    title: "New Product Registry"
  })
})

const getShipmentNewForm = expressAsyncHandler(async (req, res) => {
  res.render("inventory/shipmentForm", {
    title: "New Shipment Registry"
  })
})

module.exports = {
  getInventoryIndex,
  getProductsNewForm,
  getShipmentNewForm
}