import React, { useState, useContext } from 'react';
import { ProductContext, ProductContextType } from '../../contexts/ProductContext/ProductContext.tsx';
import './style.css';

const Filter: React.FC = () => {
  const [query, setQuery] = useState('');
  const { products, setFilteredProducts } = useContext(ProductContext) as ProductContextType;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search products..."
        className="filter-input"
      />
    </div>
  );
};

export default Filter;