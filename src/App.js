import React from 'react';
//import react router from dom
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import pages
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductsDetails/ProductDetails';
//impor components
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const App = () => {
  return ( 
  <Router>
    <div className='overflow-hidden'>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
      <Sidebar />
      <Footer />
    </div>
  </Router>

  )
};

export default App;
