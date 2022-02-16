import React, { Component } from 'react';
import ReservationContainer from '../Components/ReservationContainer';
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


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
