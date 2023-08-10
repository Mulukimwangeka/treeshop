import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductList from './ProductList';
import CheckoutPage from './CheckoutPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tree Shop</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/checkout/:id" element={<CheckoutPage />} />
        </Routes>
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
