import React from "react";
import Reservation from "./Reservation";
import './Reservation.css'


const ReservationContainer = ({ reservations, deleteRes}) => {
  const allReservations = reservations.map(reservation => {
    return <Reservation
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
      key={reservation.id}
      deleteRes={deleteRes}
    />
  })

  return (
    <div className='res-container'>
      {allReservations}
    </div>
  )
}


export default ReservationContainer