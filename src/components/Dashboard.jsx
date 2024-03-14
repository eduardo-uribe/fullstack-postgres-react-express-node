import { useEffect, useState } from 'react';
import Table from './Table';

export default function Dashboard() {
  const [inventory, setInventory] = useState([]);

  useEffect(function () {
    async function getUsername() {
      const request = await fetch('http://localhost:8080/api/inventory');
      const { rows } = await request.json();

      setInventory(rows);
      return;
    }

    getUsername();
  }, []);

  return (
    <main>
      <p className='page-title'>Page: Dashboard</p>
      <Table rows={inventory} />
    </main>
  );
}
