import React, { useState } from 'react';
import Product from './Product';
import trees from './data';

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTrees = trees.filter(tree => {
    return tree.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for a tree..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        {filteredTrees.map(tree => (
          <div key={tree.id} className="col-md-4 mb-4">
            <Product
              id={tree.id}
              name={tree.name}
              description={tree.description}
              price={tree.price}
              imageUrl={tree.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
