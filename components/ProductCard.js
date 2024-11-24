'use client';

export default function ProductCard({ product }) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        margin: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '250px',
        textAlign: 'center',
      }}
    >
      <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{product.title}</h3>
      <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '10px' }}>
        {product.description}
      </p>
      <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '5px' }}>
        ${product.price}
      </p>
    </div>
  );
}
