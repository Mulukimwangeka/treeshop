import React from 'react';
import Product from './Product';
import trees from './data';

const ProductList = () => {
  return (
    <div className="product-list">
      {trees.map(tree => (
        <Product
          key={tree.id}
          id={tree.id}
          name={tree.name}
          description={tree.description}
          price={tree.price}
          imageUrl={tree.imageUrl} 
        />
      ))}
    </div>
  );
};

export default ProductList;
