import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import './scss/app.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
