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

async function getNewCategory(req, res) {
  res.render("categories/new", {
    title: "Add New Category"
  })
}

const getCategory = expressAsyncHandler(async (req, res) => {
  const { categoryId } = req.params
  const category = await db.getCategoryWithId(categoryId)
  console.log(category)

  res.status(200).render("categories/edit", {
    title: category.name,
    category: category
  })
})

const postNewCategory = expressAsyncHandler(async (req, res) => {
  const body = req.body
  const { categoryName } = body

  await db.insertNewCategory(categoryName)
  res.redirect("/categories")
})

async function getProductsWithCategory(req, res) {
  const { category } = req.params
  const productsByCategory = await db.getProductsWithCategory(category)

  res.status(200).render("categories/show", {
    title: productsByCategory[0].category_name,
    productsByCategory : productsByCategory 
  })
}

module.exports = {
  getAllCategories,
  getNewCategory,
  getCategory,
  postNewCategory,
  getProductsWithCategory
}