import React from 'react';
import Product from './Product';
import trees from './data';

const ProductList = () => {
  return (
    <div className="product-list row">
      {trees.map(tree => (
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
  );
};

export default ProductList;
