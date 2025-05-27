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
  let productIds =  req.query.productIds || []
  const supplier = await db.getSupplierWithId(supplierId)
  const products = await db.fetchProductsWithSupplierId(supplierId, productIds)

  res.status(200).render("inventory/shipmentDetailsForm", {
    title: "Finalize Shipment Details",
    products,
    supplier
  })
})

const postShipmentDetailsForm = expressAsyncHandler(async (req, res) => {
  const shipmentOrder = req.body
  
  await db.insertNewShipment(shipmentOrder)

  res.status(200).redirect("/inventory/")
})

module.exports = {
  getInventoryIndex,
  getShipmentNewForm,
  getShipmentDetailsForm,
  postShipmentDetailsForm
}