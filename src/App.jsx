import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Product from './components/Product';

import './App.css';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: 'about', element: <About /> },
  { path: 'contact', element: <Contact /> },
  { path: 'dashboard', element: <Dashboard /> },
  { path: 'product/:product_id', element: <Product /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
