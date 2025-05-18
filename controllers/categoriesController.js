const expressAsyncHandler = require("express-async-handler")
const db = require("../db/queries")

// const getAllCategories = expressAsyncHandler(async (req, res) => {
//   const categories = await db.getAllCategories
//   console.log(categories)
//   res.status(200).render("categories/index", {
//     title: "Categories",
//     categories: categories
//   })
// })
async function getAllCategories(req, res) {
  const categories = await db.getAllCategories()
  
  res.status(200).render("categories/index", {
    title: "Categories",
    categories: categories
  })
}

async function getProductsWithCategory(req, res) {
  const { category } = req.params
  const products = await db.getProductsWithCategory(category)
  console.log(products)

  res.status(200).render("categories/show", {
    title: "test",
    products: products
  })
}

module.exports = {
  getAllCategories,
  getProductsWithCategory
}