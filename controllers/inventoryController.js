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
    categories,
    suppliers
  })
})

const getProductsEditFormWithId = expressAsyncHandler(async (req, res) => {
  const { productId } = req.params
  const product = await db.getProductWithId(productId)
  const categories = await db.getAllCategories()
  const suppliers = await db.getAllSuppliers()

  res.render("inventory/productsEditForm", {
    title: product.name,
    product,
    categories,
    suppliers
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
  getProductsEditFormWithId,
  getShipmentNewForm
}