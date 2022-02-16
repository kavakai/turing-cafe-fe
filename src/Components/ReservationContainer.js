import React from "react";
import Reservation from "./Reservation";
import './Reservation.css'


const ReservationContainer = ({ reservations }) => {
  let allReservations = reservations.map(reservation => {
    return <Reservation
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
      key={reservation.id}
    />
  })

  return (
    <div>
      {allReservations}
    </div>
  )
}


export default ReservationContainer