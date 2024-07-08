import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../../components/CartItem/CartItem';
import { SidebarContext, SidebarContextType } from '../../contexts/SidebarContext/SidebarContext';
import { CartContext, CartContextType, CartItem as CartItemType } from '../../contexts/CartContext/CartContext';
import './style.css';

const Sidebar: React.FC = () => {
  const { isOpen, handleClose } = useContext(SidebarContext) as SidebarContextType;
  const { cart, clearCart, total, itemAmount } = useContext(CartContext) as CartContextType;

  return (
    <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'} shadow-3xl md:w-[35vw] xl:max-w-[30vw]`}>
      <div className='sidebar-header'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className={`sidebar-content ${isOpen ? 'sidebar-content-lg' : ''}`}>
        {cart.map((item: CartItemType) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className='sidebar-footer'>
        <div className='sidebar-total'>
          <div className='sidebar-total-text'>
            <span className='mr-2'>Total:</span><span className="sidebar-total-text">${total.toFixed(2)}</span>
          </div>
          <div onClick={clearCart} className='sidebar-clear-cart'>
            <FiTrash2 />
          </div>
        </div>
        <Link to={'/'} className='sidebar-link bg-gray-200 text-primary'>View Cart</Link>
        <Link to={'/'} className='sidebar-link bg-primary'>Checkout</Link>
      </div>
    </div>
  );
};

export default Sidebar;