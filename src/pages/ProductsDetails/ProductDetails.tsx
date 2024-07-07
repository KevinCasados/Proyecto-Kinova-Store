import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext, CartContextType, CartItem } from "../../contexts/CartContext/CartContext.tsx";
import { ProductContext, ProductContextType } from "../../contexts/ProductContext/ProductContext.tsx";
import './style.css'

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount?: number;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useContext(ProductContext) as ProductContextType;
  const { addToCart } = useContext(CartContext) as CartContextType;

  const product = products.find((item: Product) => item.id === parseInt(id, 10));

  if (!product) {
    return (
      <section className="product-details-loading">
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;
  return (
    <section className="product-details-section">
      <div className="container">
        <div className="product-details-container">
          <div className="product-details-image">
            <img src={image} alt={title} />
          </div>
          <div className="product-details-info">
            <h1>{title}</h1>
            <div className="product-details-price">
              $ {price}
            </div>
            <p>{description}</p>
            <button onClick={() => addToCart({ ...product, amount: 1 }, product.id)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;