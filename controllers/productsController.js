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
    title: "Register New Product",
    categories,
    suppliers
  })
})

const postNewProduct = expressAsyncHandler(async (req, res) => {
  const product = req.body

  await db.insertNewProduct(product)
  res.status(200).redirect("/products")
})

const getProductsEditFormWithId = expressAsyncHandler(async (req, res) => {
  const { productId } = req.params
  const product = await db.getProductWithId(productId)
  const categories = await db.getAllCategories()
  const suppliers = await db.getAllSuppliers()

  res.render("products/edit", {
    title: product.name,
    product,
    categories,
    suppliers
  })
})

const postProductsEditForm = expressAsyncHandler(async (req, res) => {
  const product = req.body

  await db.updateProduct(product)
  res.status(200).redirect(`/products/show/${product.productId}`)
})

const deleteProduct = expressAsyncHandler(async (req, res) => {
  const { productId } = req.params

  await db.deleteProductWithId(productId)
  res.status(200).redirect("/products")
})

module.exports = {
  getAllProducts,
  getProduct,
  getNewProductForm,
  postNewProduct,
  getProductsEditFormWithId,
  postProductsEditForm,
  deleteProduct
}