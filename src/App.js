import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import FullGame from './pages/FullGame';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/game/:id" element={<FullGame />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
