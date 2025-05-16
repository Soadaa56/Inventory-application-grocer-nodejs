const { Router } = require("express")
const categoryRouter = Router()

categoryRouter.get("/", (req, res) => {
  res.render("categories", {
    title: "categories"
  })
})

module.exports = categoryRouter