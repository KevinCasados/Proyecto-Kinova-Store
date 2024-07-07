import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
// Product Provider
import { ProductProvider } from './contexts/ProductContext/ProductContext.tsx';
//sidebar Provider
import { SidebarProvider } from './contexts/SidebarContext/SidebarContext.tsx';
//cart Provider
import { CartProvider } from './contexts/CartContext/CartContext.tsx';

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
