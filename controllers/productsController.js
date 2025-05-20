const db = require("../db/queries")
const expressAsyncHandler = require("express-async-handler")

const getAllProducts = expressAsyncHandler(async (req, res) => {
  const products = await db.getAllProducts()
  res.status(200).render("products/index", {
    title: "All Products",
    products
  })
})

const getProduct = expressAsyncHandler(async (req, res) => {
  const { productId } = req.params
  const product = await db.getProductWithId(productId)

  res.status(200).render("products/show", {
    title: product.name,
    product
  })
})

const getNewProductForm = expressAsyncHandler(async (req, res) => {
  const categories = await db.getAllCategories()
  const suppliers = await db.getAllSuppliers()

  res.render("products/new", {
    title: "New Product",
    categories,
    suppliers
  })
})

module.exports = {
  getAllProducts,
  getProduct,
  getNewProductForm
}