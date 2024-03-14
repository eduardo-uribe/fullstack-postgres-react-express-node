import express from 'express';
import 'dotenv/config';
import postgres from 'postgres';

const app = express();
const port = 8080;
const sql = postgres(process.env.DATABASE_URL);

app.get('/api/inventory', async function (req, res) {
  try {
    // fetch postgres data
    const rows = await sql`SELECT 
    products.id, 
    products.product_name, 
    products.product_description, 
    products.product_price,
    products.product_quantity,
    products.product_number,
    category.category_name,
    category.category_description
    FROM products 
    INNER JOIN category 
    ON products.category_id = category.id`;

    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );

    return res.status(200).json({ rows });
  } catch (error) {
    console.log(error);
  }
});

app.get('/api/product/:id', async function (req, res) {
  const { id } = req.params;

  try {
    // fetch postgres data
    const row = await sql`SELECT *
      FROM products
      INNER JOIN category
      ON products.category_id = category.id
      INNER JOIN supplier
      ON products.supplier_id = supplier.id
      WHERE products.id = ${id};`;

    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );

    return res.status(200).json({ row });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, function () {
  console.log(`Listening for incoming HTTP request on port: ${port}`);
});

// setup a global error handler
