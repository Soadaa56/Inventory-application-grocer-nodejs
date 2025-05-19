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
  const { rows } = await pool.query("SELECT * FROM categories;")
  return rows
}

async function insertNewSupplier(supplierName) {
  await pool.query(`
    INSERT INTO suppliers (name)
    VALUES ($1)
    `, [supplierName])
}

async function getProductsWithCategory(category) {
  const { rows } = await pool.query(`
    SELECT products.*, categories.name AS category_name
    FROM products
    JOIN categories ON products.category_id = categories.id
    WHERE LOWER(categories.name) = LOWER($1);
    `, [category])
  return rows
}

async function getAllSuppliers() {
  const { rows } = await pool.query("SELECT * FROM suppliers;")
  return rows
}

async function getProductsWithSupplier(supplier) {
  const { rows } = await pool.query(`
    SELECT products.*, suppliers.name AS supplier_name
    FROM products
    Join suppliers ON products.supplier_id = suppliers.id
    WHERE LOWER(suppliers.name) = LOWER($1);    
    `, [supplier])
  return rows
}

module.exports = {
  getAllProducts,
  getProductWithId,
  getAllCategories,
  insertNewSupplier,
  getProductsWithCategory,
  getAllSuppliers,
  getProductsWithSupplier
} 