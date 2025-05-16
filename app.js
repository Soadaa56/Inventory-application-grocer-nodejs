require("dotenv").config()
const PORT = process.env.PORT || 8080
const express = require("express")
const app = express()
const path = require("node:path")
const indexRouter = require("./routes/indexRouter")

app.set('view engine', 'ejs')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.use("/", indexRouter)

app.listen(PORT, () => {
  console.log(`Express running on port: ${PORT}`)
})