require("dotenv").config()

const { Client } = require("pg")

const SQL = `
INSERT INTO categories (id, name) VALUES
  (1, 'Dairy'),
  (2, 'Meat');

INSERT INTO suppliers (id, name) VALUES
  (1, 'Happy Cows'),
  (2, 'Less Happy Cows');

INSERT INTO products (name, size, price, sku, category_id, supplier_id) VALUES
  ('Whole Milk', '1 Gallon', 4.99, 'MILK001', 1, 1),
  ('Skim Milk', '1 Gallon', 4.99, 'MILK002', 1, 1),
  ('Half N Half', '1 Pint', 5.49, 'MILK003', 1, 1),
  ('Heavy Cream', '1 Pint', 7.99, 'MILK004', 1, 1),
  ('Cheddar Cheese', '16 oz', 4.50, 'CHEE001', 1, 1),
  ('Ground Beef', '1 lb', 5.49, 'BEEF001', 2, 2),
  ('Ground Beef - Family Pack', '3 lbs', 14.99, 'BEEF002', 2, 2),
  ('Beef Liver', '1 lb', 1.99, 'BEEF003', 2, 2);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:5432/grocer_app`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();