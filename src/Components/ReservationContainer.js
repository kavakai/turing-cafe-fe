import React from "react";
import Reservation from "./Reservation";


const ReservationContainer = ({ reservations }) => {
  reservations.map(reservation => {
    return <Reservation
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
    />
  })

  return (
    <div>
      <Reservation />
    </div>
  )
}


export default ReservationContainer