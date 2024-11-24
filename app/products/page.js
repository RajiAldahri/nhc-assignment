'use client';

import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../../components/SearchBar';
import ProductList from '../../components/ProductList';
import Navbar from '../../components/Navbar'; 

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchTerm}`
      );
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div>
      <Navbar /> 
      <div>
        <h1 style={{ textAlign: 'center' }}>Product Search</h1>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
        />
        {isLoading ? (
          <p style={{ textAlign: 'center' }}>Loading...</p>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </div>
  );
}

