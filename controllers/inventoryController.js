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

const getShipmentDetailsForm = expressAsyncHandler(async (req, res) => {
  const { supplierId } = req.query
  const { productIds } = req.query

  console.log(supplierId)
  console.log(productIds)

  res.status(200).render("inventory/shipmentDetailsForm", {
    title: "Finalize Shipment Details"
  })
})

module.exports = {
  getInventoryIndex,
  getShipmentNewForm,
  getShipmentDetailsForm
}