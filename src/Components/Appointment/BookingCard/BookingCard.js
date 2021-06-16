import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({ booking,date }) => {
    console.log(date);
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
  return (
    <div className="col-md-4 mb-3 mt-5">
      <div className=" card p-3">
        <div className="card-body text-center">
          <h3 style={{ color: "#1CC7C1" }}>{booking.name}</h3>
          <br />
          <big>{booking.visitingHour}</big>
          <br />
          <small className="text-secondary">
            {booking.totalSpace} SPACE AVAILABLE
          </small>
          <br />
          <button onClick = {openModal} className="btn btn-primary">BOOK APPOINTMENT</button>
          <AppointmentForm date  = {date} modalIsOpen ={modalIsOpen} appointmentOn= {booking} closeModal ={closeModal}></AppointmentForm>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
