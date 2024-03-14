import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <nav>
        <Link to='/about' className='navigation'>
          About
        </Link>
        <Link to='/contact' className='navigation'>
          Contact
        </Link>
        <Link to='/dashboard' className='navigation'>
          Dashboard
        </Link>
      </nav>
      <p className='home'>Page: Home</p>
      <p className='home'>
        Full-stack JavaScript web application utilizing React, PostgreSQL,
        Express, Node.js
      </p>
    </main>
  );
}
