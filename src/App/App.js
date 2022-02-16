import React, { Component } from 'react';
import ReservationContainer from '../Components/ReservationContainer';
import NewRes from '../Components/NewRes'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      error: ''
    }
  }
  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ reservations: data })
      })
      .catch(err => this.setState({error: err.message}))
  }

  addNewRes = (newRes) => {
    fetch("http://localhost:3001/api/v1/reservations", {
      method: "POST",
      body: JSON.stringify(newRes),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ reservations: data }))
      .catch((err) => this.setState({ error: err.message }));
  }

  deleteRes = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => this.setState({reservations: data}))
      .catch((err) => this.setState({ error: err.message }));
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <NewRes addNewRes={this.addNewRes}/>
        </div>
        <div className='resy-container'>
          {this.state.error
            ? <h2 className='err'>{this.state.error}</h2>
            : <ReservationContainer reservations={this.state.reservations} deleteRes={this.deleteRes} />}
        </div>
      </div>
    )
  }
}

export default App;
