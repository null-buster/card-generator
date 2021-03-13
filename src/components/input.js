import React, {Component} from 'react';
// import image from '../img/vumbulaitem.png';
import {Button} from "./button";
// import {Footer} from "./Footer";
// import {Nav} from "./Nav";
// import {Jumbtron} from "./Jumbtron";
import {Card} from "./card";

class Input extends Component {
  state = {
    name: "",
    email: "",
    contact: "",
    image: "",
    items: [
      {
        id: 1,
        name: "test",
        email: "test@gmail.com",
        contact: "123456789",
        image: "https://www.mashbox.org/wp-content/uploads/2017/01/panda-3.png"
      }
    ]
  };

  /**
   * Handle input changes in the AddItem component.
   * @param event
   */
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const contact = target.contact;
    const image = target.image;
    const email = target.email;
    this.setState({
      [name]: value,
      [contact]: value,
      [email] : value,
      [image]: value
    });
  };

  /**
   * Add an item to state.
   * @param event
   */
  addItem = event => {
    event.preventDefault();
    const {name, email, contact, image} = this.state;
    const itemsInState = this.state.items;
    const itemsArrayLength = itemsInState.length;
    const id = itemsArrayLength ? (itemsInState[itemsArrayLength - 1].id + 1) : 1;
    this.setState({
      items: [
        ...itemsInState,
        Object.assign({}, {
          id,
          name,
          email,
          contact,
          image
        })
      ],
      name: "",
      email: "",
      contact: "",
      image:""
    })
  };

  /**
   * Toggle the isEditing property of an item when the Edit button
   * within ItemCard is clicked.
   * @param index
   */
  toggleItemEditing = index => {
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            isEditing: !item.isEditing
          }
        }
        return item;
      })
    });
  };

  /**
   * Update the Name and/or email of an item.
   * @param event
   * @param index
   */
  handleItemUpdate = (event, index) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const email = target.email;
    const image = target.image;
    const contact  = target.contact
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            [name]: value,
            [email]: value,
            [image]: value,
            [contact]: value
          }
        }
        return item;
      })
    });
  };

  /**
   * Delete an item from state
   * @param index Index of the item to be deleted.
   */
  onDelete = index => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1)
      ]
    });
  };

  render() {
    const {name, email, contact, image} = this.state;
    return <div>

      <div className="container pt-4">

        <Card
            name={name}
            email={email}
            contact = {contact}
            image = {image}
            onChange={this.handleInputChange}
            onSubmit={this.addItem}
        />

        <h1 className="display-4 my-4 text-center text-muted">Cards</h1>

        <div className="row">
          {
            this.state.items.map((item, index) =>
                <Button
                    key={item.id}
                    index={index}
                    image={item.image}
                    item={item}
                    toggleEditing={() => this.toggleItemEditing(index)}
                    onChange={this.handleItemUpdate}
                    onDelete={() => this.onDelete(index)}
                />
            )
          }
        </div>

        <hr/>
        
      </div>
    </div>;
  }
}

export default Input;