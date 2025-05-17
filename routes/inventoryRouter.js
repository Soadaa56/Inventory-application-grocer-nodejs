const { Router } = require("express")
const inventoryRouter = Router()

inventoryRouter.get("/", (req, res) => {
  res.render("inventory", {
    title: "Inventory Form"
  })
})

module.exports = inventoryRouter