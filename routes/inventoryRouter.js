const { Router } = require("express")
const inventoryRouter = Router()

inventoryRouter.get("/", (req, res) => {
  res.render("inventory/index", {
    title: "Inventory Form"
  })
})

module.exports = inventoryRouter