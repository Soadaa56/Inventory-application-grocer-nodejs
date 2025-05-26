const expressAsyncHandler = require("express-async-handler")
const db = require("../db/queries")

const fetchProductsWithSupplierId = expressAsyncHandler(async (req, res) => {
  const { supplierId } = req.query
  const products = await db.fetchProductsWithSupplierId(supplierId)

  res.status(200).json(products)
})

module.exports = {
  fetchProductsWithSupplierId
}