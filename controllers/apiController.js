const expressAsyncHandler = require("express-async-handler")
const db = require("../db/queries")

const fetchAllProductsWithSupplierId = expressAsyncHandler(async (req, res) => {
  const { supplierId } = req.query
  const products = await db.fetchAllProductsWithSupplierId(supplierId)

  res.status(200).json(products)
})

module.exports = {
  fetchAllProductsWithSupplierId
}