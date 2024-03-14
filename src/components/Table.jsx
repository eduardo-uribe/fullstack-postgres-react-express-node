import { Link } from 'react-router-dom';

export default function Table({ rows }) {
  const list = rows.map(function (row) {
    return (
      <li key={row.id} className='table-row'>
        <p>
          <b>{row.category_name}</b>
        </p>
        <p>
          <Link to={`/product/${row.id}`}>
            <b>{row.product_name}</b>
          </Link>
        </p>
        <p>
          <b>#{row.product_number}</b>
        </p>
        <p>
          <b>{row.product_quantity}</b>
        </p>
      </li>
    );
  });

  return (
    <ul className='table'>
      <li key={0} className='table-row'>
        <p>
          <b>Category</b>
        </p>
        <p>
          <b>Product</b>
        </p>
        <p>
          <b>SKU</b>
        </p>
        <p>
          <b>Quantity</b>
        </p>
      </li>
      {list}
    </ul>
  );
}
