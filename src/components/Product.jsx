import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
  const [product, setProduct] = useState({});

  // current url parameters
  const { product_id } = useParams();

  useEffect(function () {
    // query product data (category, products, suppliers)
    async function getProduct() {
      const request = await fetch(
        `http://localhost:8080/api/product/${product_id}`
      );
      const { row } = await request.json();
      setProduct(row[0]);
      return;
    }

    try {
      getProduct();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main>
      <section className='product'>
        <h1 className='product-title'>
          <b>Product</b>
        </h1>
        <p>Product: {product.product_name}</p>
        <p>Description: {product.product_description}</p>
        <p>Price: ${product.product_price}</p>
        <p>Quantity: {product.product_quantity}</p>
        <p>Supplier: {product.supplier_name}</p>
        <p>Supplier Email: {product.supplier_email}</p>
        <p>Supplier Phone: {product.supplier_phone}</p>
        <p>Category: {product.category_name}</p>
        <p>Category Description: {product.category_description}</p>
      </section>
    </main>
  );
}
