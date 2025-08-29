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

const getShipmentOrderById = expressAsyncHandler(async (req, res) => {
  const shipmentId = req.params.id
  const shipmentOrder = await db.getShipmentOrderById(shipmentId)

  if (!shipmentOrder) {
    return res.status(404).send("Shipment not found");
  }

  res.status(200).render("inventory/shipmentOrder", {
    title: "Shipment Order Details",
    shipmentOrder
  })
})

const getAllShipments = expressAsyncHandler(async (req, res) => {
  shipments = await db.getAllShipments()

  res.status(200).render("inventory/shipmentAll", {
    title: "All Shipments",
    shipments
  })
})

const getInventoryStock = expressAsyncHandler(async (req, res) => {
  const allShipmentProducts = await db.getInventoryStock()
  const productIds = allShipmentProducts.map(product => product.product_id)
  const productInfo = await db.fetchProductsWithIds(productIds)

  const inventoryStock = allShipmentProducts.map(stock => {
    const product = productInfo.find(p => p.id === stock.product_id)
    const quantity = Number(stock.total_quantity)
    const price = Number(product.price)

    return {
      ...stock, 
        // product_id, total_quantity
      ...product,
        // id, name, size, price, category_name
      total_product_value: Math.round(quantity * price * 100) / 100
    }
  })

  const totalInventoryValue = inventoryStock.reduce((sum, product) => {
    return sum + product.total_product_value
  }, 0)
  const totalInventoryValueRounded = totalInventoryValue.toFixed(2)

  res.status(200).render("inventory/stock", {
    title: "Inventory Stock",
    inventoryStock,
    totalInventoryValueRounded
  })
})

module.exports = {
  getInventoryIndex,
  getShipmentNewForm,
  getShipmentDetailsForm,
  postShipmentDetailsForm,
  getShipmentOrderById,
  getAllShipments,
  getInventoryStock
}