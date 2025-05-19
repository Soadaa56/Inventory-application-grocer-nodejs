const db = require("../db/queries")
const expressAsyncHandler = require("express-async-handler")

const getAllProducts = expressAsyncHandler(async (req, res) => {
  const products = await db.getAllProducts()
  res.status(200).render("products/index", {
    title: "All Products",
    products: products
  })
})

const getProduct = expressAsyncHandler(async (req, res) => {
  const { productId } = req.params
  const product = await db.getProductWithId(productId)

  res.status(200).render("products/show", {
    title: product.name,
    product: product
  })
})

module.exports = {
  getAllProducts,
  getProduct
}