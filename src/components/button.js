import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({toggleEditing, item, image, onChange, index, onDelete}) => (
    <div className="col-md-6 col-lg-3">
      <div className="card mb-3">
        <img className="card-img-top" src={image}/>
        <div className="card-body">
          {item.isEditing
              ?
              <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    className="form-control mb-2 mr-sm-2"
                    placeholder="name"
                    value={item.name}
                    onChange={event => onChange(event, index)}
                    required
                />
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email"
                    value={item.email}
                    onChange={event => onChange(event, index)}
                    required
                />
                <input
                    type="text"
                    name="contact"
                    className="form-control"
                    placeholder="contact"
                    value={item.contact}
                    onChange={event => onChange(event, index)}
                    required
                />
                <input
                    type="text"
                    name="image"
                    className="form-control"
                    placeholder="image"
                    value={item.image}
                    onChange={event => onChange(event, index)}
                    required
                />
              </div>
              :
              <div>
                {/* <p className="card-title text-center">Name: {item.name}</p> */}
                <div className="row justify-content-center mb-4">
                  <p className="card-text">
                    <span>Name : {item.name}</span>
                    {/* <img href={item.image}  width="24" height="39"></img> */}
                    {/* <span className="badge badge-secondary py-2 mr-5">Cards</span> */}
                    <br></br>
                    <span>Email: {item.email}</span>
                    <br></br>
                    <span>Contact number: {item.contact}</span>
                    <br></br>
                  </p>
                </div>
              </div>
          }

          <div className="row justify-content-center">
            <div>
              <button
                  type="button"
                  className="btn btn-primary mr-2"
                  onClick={toggleEditing}>
                {item.isEditing ? "Save" : "Edit"}
              </button>
              <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
);

Button.propTypes = {
  image: PropTypes.string.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired
  }),
  toggleEditing: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};