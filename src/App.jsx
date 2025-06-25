import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './containers/LandingPage'
import ProductListing from './containers/ProductListing';
import CartDetail from './containers/CartDetail';
import NotFoundPage from './containers/NotFoundPage';
import CheckoutPage from './containers/CheckoutPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products' element={<ProductListing />} />
        <Route path='/cart' element={<CartDetail />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App;
