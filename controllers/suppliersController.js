const db = require("../db/queries")
const expressAsyncHandler = require("express-async-handler")

const getAllSuppliers = expressAsyncHandler(async (req, res) => {
  const suppliers = await db.getAllSuppliers()

  res.status(200).render("suppliers/index", {
    title: "Suppliers",
    suppliers: suppliers
  })
})

const getNewSupplier = expressAsyncHandler(async (req, res) => {
  res.render("suppliers/new", {
    title: "Add New Supplier"
  })
})

const getSupplier = expressAsyncHandler(async (req, res) => {
  const { supplierId } = req.params
  const supplier = await db.getSupplierWithId(supplierId)

  res.status(200).render("suppliers/edit", {
    title: supplier.name,
    supplier: supplier
  })
})

const postNewSupplier = expressAsyncHandler(async (req, res) => {
  const body = req.body
  const { supplierName } = body

  await db.insertNewSupplier(supplierName)
  res.redirect("/suppliers")
})

const getProductsWithSupplier = expressAsyncHandler(async (req, res) => {
  const { supplier } = req.params
  const productsBySupplier = await db.getProductsWithSupplier(supplier)

  res.status(200).render("suppliers/show", {
    title: productsBySupplier[0].supplier_name,
    productsBySupplier: productsBySupplier
  })
})

module.exports = {
  getAllSuppliers,
  getNewSupplier,
  getSupplier,
  postNewSupplier,
  getProductsWithSupplier
}