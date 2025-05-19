const db = require("../db/queries")
const expressAsyncHandler = require("express-async-handler")

const getInventoryIndex = expressAsyncHandler(async (req, res) => {
  res.render("inventory/index", {
    title: "Inventory Managment"
  })
})

const getProductsNewForm = expressAsyncHandler(async (req, res) => {
  const categories = await db.getAllCategories()
  const suppliers = await db.getAllSuppliers()

  res.render("inventory/productsNewForm", {
    title: "New Product Registry",
    categories: categories,
    suppliers: suppliers
  })
})

const getShipmentNewForm = expressAsyncHandler(async (req, res) => {
  res.render("inventory/shipmentNewForm", {
    title: "New Shipment Registry"
  })
})

module.exports = {
  getInventoryIndex,
  getProductsNewForm,
  getShipmentNewForm
}