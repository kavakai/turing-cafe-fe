import React from "react";
import './Reservation.css'

const Reservation = ({ id, name, date, time, number, deleteRes }) => {
  return (
    <div className='reservation-card'>
      <h2>{name}</h2>
      <h3>{date}</h3>
      <h3>{time}</h3>
      <h3>{number}</h3>
      <button onClick={() => deleteRes(id)}>Delete Reservation</button>
    </div>

  )
}

export default Reservation