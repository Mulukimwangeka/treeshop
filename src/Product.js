import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Product = ({ id, name, description, price, imageUrl }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="card product-card">
      <img src={imageUrl} alt={name} className="card-img-top product-image" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <button className="btn btn-primary" onClick={openModal}>
          Buy Now
        </button>
      </div>

      {/* Bootstrap Modal */}
      <div
        className={`modal fade ${modalOpen ? 'show' : ''}`}
        style={{ display: modalOpen ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Purchase {name}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="modal-body">
              <img
                src={imageUrl}
                alt={name}
                className="modal-product-image"
                style={{ maxWidth: '300px' }} // Adjust the width as needed
              />
              {/* Add your purchase form or payment details here */}
              <p>Enter payment details or form here</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal-backdrop fade ${modalOpen ? 'show' : ''}`}
        style={{ display: modalOpen ? 'block' : 'none' }}
      ></div>
    </div>
  );
};

export default Product;
