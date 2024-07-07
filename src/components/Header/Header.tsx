import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext, SidebarContextType } from '../../contexts/SidebarContext/SidebarContext.tsx';
import { CartContext, CartContextType } from '../../contexts/CartContext/CartContext.tsx';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo-kinova-sin-fondo-negro.png'
import './style.css'


const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext) as SidebarContextType;
  const { itemAmount } = useContext(CartContext) as CartContextType;

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isActive ? 'header-active' : 'header-inactive'}`}>
      <div className='header-container'>
        <Link to={'/'}>
          <div>
            <img className='header-logo' src={Logo} alt='Kinova Store Logo' />
          </div>
        </Link>
        <div onClick={() => setIsOpen(!isOpen)} className='header-cart'>
          <BsBag className='text-2xl' />
          <div className='header-cart-count'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;