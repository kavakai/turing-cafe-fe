import React, { Component } from "react";

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
    event.preventDefault()
    this.setState ({[event.target.name]: [event.target.value]})
  }

  submitNewRes = () => {
    
  }

    render() {
      return (
        <form>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={(event) => this.handleChange(event)}
          />
          <input
            type="text"
            placeholder="Date (mm/dd)"
            value={this.state.date}
            onChange={(event) => this.handleChange(event)}
          />
          <input
            type="text"
            placeholder="Time"
            value={this.state.time}
            onChange={(event) => this.handleChange(event)}
          />
          <input
            type="text"
            placeholder="Number of guests"
            value={this.state.number}
            onChange={(event) => this.handleChange(event)}
          />
          <button className='add-res-btn' onClick={() => {this.submitNewRes()}}>Make Reservation</button>
        </form>
      );
  }
}

export default NewRes