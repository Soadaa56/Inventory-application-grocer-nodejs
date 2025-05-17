const db = require("../db/queries")

async function getAllProducts(req, res) {
  const products = await db.getAllProducts()
  console.log(products)
  res.render("products", {
    title: "All Products",
    products: products
  })
}

module.exports = {
  getAllProducts
}