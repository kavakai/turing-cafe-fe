import React, { Component } from "react";
import './NewRes.css'

class NewRes extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    this.setState ({[event.target.name]: event.target.value})
  }

  submitNewRes = (event) => {
    event.preventDefault()
    const newRes = {
      id: Date.now(),
      ...this.state
    }
    this.props.addNewRes(newRes)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ id: "", name: "", date: "", time: "", number: "" });
  }

    render() {
      return (
        <form className='resy-form'>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={(event) => this.handleChange(event)}
          />
          <input
            type="text"
            placeholder="Date (mm/dd)"
            name="date"
            value={this.state.date}
            onChange={(event) => this.handleChange(event)}
          />
          <input
            type="text"
            placeholder="Time (00:00)"
            name="time"
            min="0"
            value={this.state.time}
            onChange={(event) => this.handleChange(event)}
          />
          <input
            type="number"
            placeholder="Number of guests"
            name="number"
            min='0'
            value={this.state.number}
            onChange={(event) => this.handleChange(event)}
          />
          <button
            className="add-res-btn"
            onClick={(event) => {
              this.submitNewRes(event);
            }}
          >
            Make Reservation
          </button>
        </form>
      );
  }
}

export default NewRes