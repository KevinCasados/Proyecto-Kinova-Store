import React, { useContext } from 'react';
import { ProductContext, ProductContextType } from '../../contexts/ProductContext/ProductContext';
import Product from '../../components/Product/Product';
import Hero from '../../components/Hero/Hero';
import Filter from '../../components/Filter/Filter';
import './style.css'

const Home: React.FC = () => {
  const { filteredProducts } = useContext(ProductContext) as ProductContextType;

  return (
    <div>
      <Hero />
      <section className="home-section">
        <article className="home-container">
          <Filter />
          <div className="home-grid">
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;