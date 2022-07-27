import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

import './scss/app.scss';

const Cart = React.lazy(() => import('./pages/Cart'));
const FullGame = React.lazy(() => import('./pages/FullGame'));

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
