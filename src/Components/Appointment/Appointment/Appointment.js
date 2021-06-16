import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleChange = (data) => {
        setSelectedDate(data)
    }
    return (
        <div className= "container">
            <Navbar></Navbar>
            <AppointmentHeader handleChange ={handleChange}></AppointmentHeader>
            <BookAppointment date = {selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;