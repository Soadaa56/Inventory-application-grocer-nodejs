require("dotenv").config()
const PORT = process.env.PORT || 8080
const express = require("express")
const app = express()
const path = require("node:path")
const assetsPath = path.join(__dirname, "public")

const links = require("./links")
const indexRouter = require("./routes/indexRouter")
const productRouter = require("./routes/productRouter")
const categoryRouter = require("./routes/categoryRouter")

app.set('view engine', 'ejs')
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.locals.links = links
  next();
})

app.use("/", indexRouter)
app.use("/products", productRouter)
app.use("/categories", categoryRouter)

app.listen(PORT, () => {
  console.log(`Express running on port: ${PORT}`)
})