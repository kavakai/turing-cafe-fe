import React, { Component } from 'react';
import ReservationContainer from '../Components/ReservationContainer';
import NewRes from '../Components/NewRes'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []

    }
  }
  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ reservations: data })
      })
      .catch(err => console.log(err))
  }

  addNewRes = (newRes) => {
    // this.setState({ reservations: [...this.state.reservations, newRes] })
    fetch("http://localhost:3001/api/v1/reservations", {
      method: "POST",
      body: JSON.stringify(newRes),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch(err => console.log(err))
  }

  deleteRes = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`)
      .then((response) => console.log(response))
      .then((data) => console.log(data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <NewRes addNewRes={this.addNewRes}/>
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.reservations} deleteRes={this.deleteRes} />
        </div>
      </div>
    )
  }
}

export default App;
