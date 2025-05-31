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
  let productIds = []
  let formProductIds = req.query.productIds
  // Is it clean code to move the below to a seperate function?
  // Selecting only one product was causing an error (data was a string and not array of strings)
  // Allows one product to be selected
  if (Array.isArray(formProductIds)) {
    productIds = formProductIds
  } else {
    productIds = [formProductIds]
  }

  const supplier = await db.getSupplierWithId(supplierId)
  const products = await db.fetchProductsWithSupplierId(supplierId, productIds)
  const shipmentOrder = await db.fetchShipmentOrderNumber()

  console.log(supplierId)
  console.log(productIds)

  res.status(200).render("inventory/shipmentDetailsForm", {
    title: "Finalize Shipment Details",
    products,
    supplier,
    shipmentOrder
  })
})

const postShipmentDetailsForm = expressAsyncHandler(async (req, res) => {
  const shipmentOrder = req.body
  
  await db.insertNewShipment(shipmentOrder)

  res.status(200).redirect("/inventory/")
})

const getAllShipments = expressAsyncHandler(async (req, res) => {
  shipments = await db.getAllShipments()

  res.status(200).render("inventory/shipmentAll", {
    title: "All Shipments",
    shipments
  })
})

module.exports = {
  getInventoryIndex,
  getShipmentNewForm,
  getShipmentDetailsForm,
  postShipmentDetailsForm,
  getAllShipments
}