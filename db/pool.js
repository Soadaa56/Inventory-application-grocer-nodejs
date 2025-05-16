require("dotenv").config()
const { Pool } = require("pg")

module.exports = new Pool({
  host: "localhost",
  user: process.env.DB_USERNAME,
  database: "grocer_app",
  password: process.env.DB_PASSWORD,
  port: 5432
})