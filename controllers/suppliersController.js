const db = require("../db/queries")

async function getAllSuppliers(req, res) {
  const suppliers = await db.getAllSuppliers()
  console.log(suppliers)

  res.status(200).render("suppliers/index", {
    title: "Suppliers",
    suppliers: suppliers
  })
}

module.exports = {
  getAllSuppliers
}