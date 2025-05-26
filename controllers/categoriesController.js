const expressAsyncHandler = require("express-async-handler")
const db = require("../db/queries")

const getAllCategories = expressAsyncHandler(async (req, res) => {
  const categories = await db.getAllCategories()
  
  res.status(200).render("categories/index", {
    title: "Categories",
    categories
  })
})

const getNewCategory = expressAsyncHandler(async (req, res) => {
  res.render("categories/new", {
    title: "Add New Category"
  })
})

const getCategory = expressAsyncHandler(async (req, res) => {
  const { categoryId } = req.params
  const category = await db.getCategoryWithId(categoryId)

  res.status(200).render("categories/edit", {
    title: category.name,
    category
  })
})

const postNewCategory = expressAsyncHandler(async (req, res) => {
  const body = req.body
  const { categoryName } = body

  await db.insertNewCategory(categoryName)
  res.redirect("/categories")
})

const getProductsWithCategory = expressAsyncHandler(async (req, res) => {
  const { category } = req.params
  const productsByCategory = await db.getProductsWithCategory(category)

  res.status(200).render("categories/show", {
    title: productsByCategory[0].category_name,
    productsByCategory
  })
})

module.exports = {
  getAllCategories,
  getNewCategory,
  getCategory,
  postNewCategory,
  getProductsWithCategory
}