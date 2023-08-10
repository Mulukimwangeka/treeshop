import React from 'react';
import './App.css';
import ProductList from './ProductList';
import HomePage from './Home'; // Import the HomePage component

function App() {
  return (
    <div className="App">
      <header className="bg-primary py-4 text-light">
        <h1 className="text-center">Tree Shop</h1>
      </header>
      <main className="container mt-4">
        <HomePage /> {/* Add the HomePage component */}
        <ProductList />
      </main>
      <footer className="bg-secondary py-3 text-light text-center">
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
