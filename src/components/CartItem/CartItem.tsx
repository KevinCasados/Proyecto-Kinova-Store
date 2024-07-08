import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext, CartContextType } from '../../contexts/CartContext/CartContext';
import './style.css'

interface CartItemProps {
  item: {
    id: number;
    title: string;
    image: string;
    price: number;
    amount: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const cartContext = useContext(CartContext) as CartContextType;

  if (!cartContext) {
    return null; // o algún fallback
  }

  const { removeFromCart, increaseAmount, decreaseAmount } = cartContext;
  const { id, title, image, price, amount } = item;
  return (
    <div className='cart-item'>
      <div className='cart-item-content'>
        <Link to={`/product/${id}`}>
          <img className='cart-item-image' src={image} alt={title} />
        </Link>
        <div className='cart-item-details'>
          <div className='cart-item-header'>
            <Link to={`/product/${id}`} className='cart-item-title'>
              {title}
            </Link>
            <div onClick={() => removeFromCart(id)} className='cart-item-remove'>
              <IoMdClose className='cart-item-remove-icon' />
            </div>
          </div>
          <div className='cart-item-quantity'>
            <div className='cart-item-quantity-control'>
              <div onClick={() => decreaseAmount(id)} className='cart-item-decrease'>
                <IoMdRemove />
              </div>
              <div className='cart-item-amount'>{amount}</div>
              <div onClick={() => increaseAmount(id)} className='cart-item-increase'>
                <IoMdAdd />
              </div>
            </div>
            <div className='cart-item-price'>${price}</div>
            <div className='cart-item-total'>{`$${(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;