'use client';

export default function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <form
      onSubmit={onSearch}
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
      }}
    >
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '60%',
          maxWidth: '400px',
          padding: '12px',
          borderRadius: '8px 0 0 8px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '12px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '0 8px 8px 0',
          fontSize: '16px',
        }}
      >
        Search
      </button>
    </form>
  );
}
