import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

import { Loading } from './components';

import './scss/app.scss';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const FullGame = React.lazy(() => import(/* webpackChunkName: "FullGame" */ './pages/FullGame'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<Loading />}>
              <Cart />{' '}
            </Suspense>
          }
        />
        <Route
          path="game/:id"
          element={
            <Suspense fallback={<Loading />}>
              <FullGame />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
