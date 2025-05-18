const db = require("../db/queries")

async function getAllSuppliers(req, res) {
  const suppliers = await db.getAllSuppliers()

  res.status(200).render("suppliers/index", {
    title: "Suppliers",
    suppliers: suppliers
  })
}

async function getProductsWithSupplier(req, res) {
  const { supplier } = req.params
  console.log(supplier)
  const productsBySupplier = await db.getProductsWithSupplier(supplier)
  
  console.log(productsBySupplier)
  res.status(200).render("suppliers/show", {
    title: "Supplier name",
    productsBySupplier : productsBySupplier 
  })
}

module.exports = {
  getAllSuppliers,
  getProductsWithSupplier
}