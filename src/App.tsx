import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import Cart from './pages/Cart';
// import FullPizza from './pages/FullPizza';
import MainLayout from './layouts/MainLayout';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */'./pages/Cart'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */'./pages/FullPizza'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route 
          path="cart" 
          element={
            <Suspense fallback={<div>Идёт загрузка корзины... с:</div>}>
              <Cart/>
            </Suspense>} />
        <Route path="pizza/:id" element={
            <Suspense fallback={<div>Идёт загрузка... с:</div>}>
              <FullPizza/>
            </Suspense>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
