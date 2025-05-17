const db = require("../db/queries")

async function getAllProducts(req, res) {
  const products = await db.getAllProducts()
  console.log(products)
  res.render("products/index", {
    title: "All Products",
    products: products
  })
}

async function getProduct(req, res) {
  const body = req.body
  const {productId} = body
  const product = await db.getProductWithId(productId)
  res.render()
}

module.exports = {
  getAllProducts,
  getProduct
}