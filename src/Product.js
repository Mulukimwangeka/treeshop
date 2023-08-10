import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ id, name, description, price, imageUrl }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <Link to={`/checkout/${id}`}>Add to Cart</Link>
    </div>
  );
};

export default Product;
