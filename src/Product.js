import React from 'react';

const Product = ({ id, name, description, price, imageUrl }) => {
  return (
    <div className="product">
     <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <button>Buy</button>
    </div>
  );
};

export default Product;
