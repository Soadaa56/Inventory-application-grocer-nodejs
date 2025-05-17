const pool = require("./pool")

async function getAllProducts() {
  const { rows } = await pool.query(`
    SELECT products.*, categories.name AS category_name
    FROM products
    LEFT JOIN categories ON products.category_id=categories.id;
    `)
  return rows
}

module.exports = {
  getAllProducts
}