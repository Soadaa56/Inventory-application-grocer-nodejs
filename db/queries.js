const pool = require("./pool")

async function getAllProducts() {
  const { rows } = await pool.query(`
    SELECT products.*, categories.name AS category_name
    FROM products
    LEFT JOIN categories ON products.category_id=categories.id;
    `)
  return rows
}

async function getProductWithId(productId) {
  const result = await pool.query(`
    SELECT products.*, categories.name AS category_name, suppliers.name AS supplier_name
    FROM products
    LEFT JOIN categories ON products.category_id=categories.id
    LEFT JOIN suppliers ON products.supplier_id=suppliers.id
    WHERE products.id = $1;
    `, [productId])
  return result.rows[0]
}

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories")
  return rows
}

async function getProductsWithCategory(category) {
  const { rows } = await pool.query(`
    SELECT products.*, categories.name AS category_name
    FROM products
    JOIN categories ON products.category_id = categories.id
    WHERE categories.name = $1
    `, [category])
  return rows
}

module.exports = {
  getAllProducts,
  getProductWithId,
  getAllCategories,
  getProductsWithCategory
}