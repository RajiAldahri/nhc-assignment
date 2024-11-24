'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', 
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Link href="/">
		<img
          src="\logo.png" 
          alt="Logo"
          style={{ height: '40px', marginRight: '10px' }}
        />
		</Link>
        <Link href="/products" style={{ color: '#fff', textDecoration: 'none' }}>
          Products
        </Link>
        <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>
          About
        </Link>
      </div>
    </nav>
  );
}
