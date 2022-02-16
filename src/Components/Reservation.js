import React from "react";

const Reservation = ({ name, date, time, number }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{date}</h3>
      <h3>{time}</h3>
      <h3>{number}</h3>
    </div>

  )
}

export default Reservation