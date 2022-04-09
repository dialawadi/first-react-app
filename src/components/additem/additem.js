import React, { Component } from "react";


class AddItem extends Component {
  state = {
    name: '',
    age: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if(e.target.name.value !== '') {
      this.props.addItem(this.state)
      this.setState({
        name: '',
        age: ''
      })
    } else {
      alert("you must enter a value")
    }

   

  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter name.."
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="number"
            placeholder="Enter age.."
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input type="submit" value="add" />
        </form>
      </>
    );
  }
}

export default AddItem;
