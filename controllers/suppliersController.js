const db = require("../db/queries")

async function getAllSuppliers(req, res) {
  const suppliers = await db.getAllSuppliers()

  res.status(200).render("suppliers/index", {
    title: "Suppliers",
    suppliers: suppliers
  })
}

async function getNewSupplier(req, res) {
  res.render("suppliers/new", {
    title: "Add New Supplier"
  })  
}

async function postNewSupplier(req, res) {
  const body = req.body
  const { supplierName } = body

  await db.insertNewSupplier(supplierName)
  res.status(200).redirect("suppliers/index", {})
}

async function getProductsWithSupplier(req, res) {
  const { supplier } = req.params
  console.log(supplier)
  const productsBySupplier = await db.getProductsWithSupplier(supplier)
  
  console.log(productsBySupplier)
  res.status(200).render("suppliers/show", {
    title: productsBySupplier[0].supplier_name,
    productsBySupplier : productsBySupplier 
  })
}

module.exports = {
  getAllSuppliers,
  getNewSupplier,
  postNewSupplier,
  getProductsWithSupplier
}