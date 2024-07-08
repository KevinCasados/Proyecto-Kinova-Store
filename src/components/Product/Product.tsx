import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext, CartContextType } from '../../contexts/CartContext/CartContext';
import './style.css'

interface ProductProps {
  product: {
    id: number;
    image: string;
    category: string;
    title: string;
    price: number;
    amount?: number; // amount para evitar errores
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { addToCart } = useContext(CartContext) as CartContextType;
  const { id, image, category, title, price } = product;

  return (
    <div>
      <section className="product-section">
        <article className="product-article">
          <div className="product-image-container">
            <img
              className="product-image"
              src={image}
              alt={title}
            />
          </div>
        </article>
        <article className="product-buttons">
          <button onClick={() => addToCart({ ...product, amount: 1 })}>
            <div className="product-button">
              <BsPlus className="product-icon" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="product-link"
          >
            <BsEyeFill />
          </Link>
        </article>
      </section>
      <section>
        <article className="product-category">{category}</article>
        <Link to={`/product/${id}`}>
          <h2 className="product-title">{title}</h2>
        </Link>
        <article className="product-price">${price}</article>
      </section>
    </div>
  );
};

export default Product;