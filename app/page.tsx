'use client';

import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to the NHC Assignment App</h1>
        <p>
          Use the navigation above to explore the Products and About pages.
        </p>
      </div>
    </div>
  );
}
