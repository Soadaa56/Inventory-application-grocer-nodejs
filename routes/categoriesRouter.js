const { Router } = require("express")
const categoriesRouter = Router()

categoriesRouter.get("/", (req, res) => {
  res.render("categories", {
    title: "categories"
  })
})

module.exports = categoriesRouter