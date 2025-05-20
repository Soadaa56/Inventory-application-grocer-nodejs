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

async function insertNewProduct(product) {
  await pool.query(`
    INSERT INTO products (name, size, price, sku, category_id, supplier_id)
    VALUES ($1, $2, $3, $4, $5, $6);
    `, [
      product.productName,
      product.productSize,
      product.productPrice,
      product.productSku,
      product.productCategory,
      product.productSupplier
    ])
}

async function updateProduct(product) {
  await pool.query(`
    UPDATE products
    SET name = $1, size = $2, price = $3, sku = $4, category_id = $5, supplier_id = $6
    WHERE id = $7;
    `, [
      product.productName,
      product.productSize,
      product.productPrice,
      product.productSku,
      product.productCategory,
      product.productSupplier,
      product.productId
    ])
}

async function deleteProductWithId(productId) {
  await pool.query(`
    DELETE FROM products 
    WHERE products.id = $1
    `, [productId])
}

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories;")
  return rows
}

async function getCategoryWithId(categoryId) {
  const result = await pool.query(`
    SELECT * 
    FROM categories
    WHERE categories.id = $1;
    `, [categoryId])
  return result.rows[0]
}

async function insertNewCategory(categoryName) {
  await pool.query(`
    INSERT INTO categories (name)
    VALUES ($1);
    `, [categoryName])
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

async function getSupplierWithId(supplierId) {
  const result = await pool.query(`
    SELECT *
    FROM suppliers
    WHERE suppliers.id = $1;
    `, [supplierId])
  return result.rows[0]  
}

async function insertNewSupplier(supplierName) {
  await pool.query(`
    INSERT INTO suppliers (name)
    VALUES ($1);
    `, [supplierName])
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
  insertNewProduct,
  updateProduct,
  deleteProductWithId,
  getAllCategories,
  getCategoryWithId,
  insertNewCategory,
  getProductsWithCategory,
  getAllSuppliers,
  getSupplierWithId,
  insertNewSupplier,
  getProductsWithSupplier
} 