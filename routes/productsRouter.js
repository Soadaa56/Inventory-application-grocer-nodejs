const { Router } = require("express")
const productRouter = Router()

productRouter.get("/", (req,res) => {
  res.render("products", {
    title: "Products"
  })
})

module.exports = productRouter