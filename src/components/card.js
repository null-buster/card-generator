import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({name, email, contact, image, onChange, onSubmit}) => (
    <div className="row justify-content-center">
      <form  onSubmit={onSubmit}>
        <h5>Please enter your Name</h5>
        
        <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Name"
            value={name}
            name="name"
            onChange={onChange}
        />
        <h5>Please enter your email</h5>
      <div className="input-group mb-2 mr-sm-2">
          <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              name="email"
              onChange={onChange}
          />
      </div> 
      <h5>Enter your contact number</h5>
      <div className="input-group mb-2 mr-sm-2"> 
          <input
              type="text"
              className="form-control"
              placeholder="Contact"
              value={contact}
              name="contact"
              onChange={onChange}
          />
      </div>  
      <h5>Paste your profile picture URL</h5>
      <div className="input-group mb-2 mr-sm-2">
          <input
              type="text"
              className="form-control"
              placeholder="Image URL"
              value={image}
              name="image"
              onChange={onChange}
          />
      </div> 
        <button type="submit" className="btn btn-primary mb-2 pxy-4">Create Card</button>
      </form>
    </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};