const { Router } = require("express")
const categoriesRouter = Router()

categoriesRouter.get("/", (req, res) => {
  res.render("categories/index", {
    title: "Categories"
  })
})

module.exports = categoriesRouter