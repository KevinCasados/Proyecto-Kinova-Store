import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Product Provider
import ProductProvider from './contexts/ProductContext/ProductContext';
//sidebar Provider
import SidebarProvider from './contexts/SidebarContext/SidebarContext';
//cart Provider
import CartProvider from './contexts/CartContext/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
