const db = require("../db/queries")

async function getAllProducts(req, res) {
  const products = await db.getAllProducts()
  
  res.render("products/index", {
    title: "All Products",
    products: products
  })
}

async function getProduct(req, res) {
  const { productId } = req.params
  const product = await db.getProductWithId(productId)

  res.render("products/show", {
    title: product.name,
    product: product
  })
}

module.exports = {
  getAllProducts,
  getProduct
}