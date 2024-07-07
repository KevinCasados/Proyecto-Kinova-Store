import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import ProductDetails from './pages/ProductsDetails/ProductDetails.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className='overflow-hidden'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
