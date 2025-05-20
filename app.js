require("dotenv").config()
const PORT = process.env.PORT || 8080
const express = require("express")
const app = express()
const path = require("node:path")
const assetsPath = path.join(__dirname, "public")

const links = require("./links")
const indexRouter = require("./routes/indexRouter")
const productsRouter = require("./routes/productsRouter")
const categoriesRouter = require("./routes/categoriesRouter")
const inventoryRouter = require("./routes/inventoryRouter")
const suppliersRouter = require("./routes/suppliersRouter")

app.set('view engine', 'ejs')
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.locals.links = links
  next();
})

app.use("/", indexRouter)
app.use("/products", productsRouter)
app.use("/categories", categoriesRouter)
app.use("/inventory", inventoryRouter)
app.use("/suppliers", suppliersRouter)

// I want it to be obvious when this middleware is used
// wrapping functions with express-async-handler seem to be the proper way of doing things
// but wrapping functions with this middleware isn't something I'm used to doing and 
// is 'slightly' annoying so I would feel better when this middleware is called 

// Error handling middleware
app.use((err, req, res, next) => {
  console.log("Below is express-async-handler middleware err.stack")
  console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Express running on port: ${PORT}`)
})