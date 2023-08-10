import React from 'react';

const Product = ({ id, name, description, price, imageUrl }) => {
  return (
    <div className="card product-card">
      <img src={imageUrl} alt={name} className="card-img-top product-image" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <a href="#" className="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  );
};

export default Product;
