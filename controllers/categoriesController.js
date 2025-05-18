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
  categories = await db.getAllCategories()
  console.log(categories)
  res.status(200).render("categories/index", {
    title: "Categories",
    categories: categories
  })
}


module.exports = {
  getAllCategories
}