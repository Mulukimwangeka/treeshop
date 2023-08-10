import React from 'react';
import './App.css';
import ProductList from './ProductList';
import HomePage from './Home'; 
import ContactUs from './ContactUs'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="bg-primary py-4 text-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col text-center">
              <h1 className="display-4">Welcome to <FontAwesomeIcon icon={faLeaf} className="leaf-icon" /> Tree Shop</h1>
              <p className="lead">Explore a world of beautiful trees and contribute to a greener planet.</p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <HomePage /> 
        <ProductList />
      </main>
      <footer className="bg-secondary py-3 text-light text-center">
        <div className="container">
        <ContactUs /> 

          <p className="tree-description">&copy; 2023 Tree Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
