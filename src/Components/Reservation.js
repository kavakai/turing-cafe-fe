import React from "react";
import './Reservation.css'

const Reservation = ({ name, date, time, number }) => {
  return (
    <div className='reservation-card'>
      <h2>{name}</h2>
      <h3>{date}</h3>
      <h3>{time}</h3>
      <h3>{number}</h3>
    </div>

  )
}

export default Reservation