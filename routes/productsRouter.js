const { Router } = require("express")
const productsRouter = Router()

productsRouter.get("/", (req,res) => {
  res.render("products", {
    title: "Products"
  })
})

module.exports = productsRouter