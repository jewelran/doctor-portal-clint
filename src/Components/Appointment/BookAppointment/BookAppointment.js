import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookAppointment = ({date}) => {
    const bookingData =[
        {
            _id:"4aebf8dc4ee0449aa5d52e16f452c3d8",
            id:1,
            title:"Teeth Orthodontics",
            visitingHour:"8:00 AM - 9:00 AM",
            totalSpace:10

        },
        {
            _id:"a2c8db5f2b464fa5996ee3a01bd5a1ea",
            id:2,
            title:"Cosmetic Dentistry",
            visitingHour:"10:05 AM - 11:30 AM",
            totalSpace:10

        },
        {
            _id:"097a2691071f440db7b7b746a14e1d87",
            id:3,
            title:"Teeth Cleaning",
            visitingHour:"5:00 AM - 6:30 AM",
            totalSpace:10

        },
        {
            _id:"0c562b79f579403fbaaa20f3b3bbee48",
            id:4,
            title:"Cavity Protection",
            visitingHour:"7:00 AM - 8:30 AM",
            totalSpace:10

        },
        {
            _id:"bf2d1aaa41034bcd9edde66a6a313f3f",
            id:5,
            title:"Teeth Cleaning",
            visitingHour:"8:00 AM - 9:00 AM",
            totalSpace:10

        },
        {
            _id:"9670f45b0a284f0e858ef984a04a7200",
            id:6,
            title:"Cosmetic Dentistry",
            visitingHour:"8:00 AM - 9:00 AM",
            totalSpace:10

        },
    ]
    return (
        <div classtitle= "container">
            <h2 style = {{color:"#1CC7C1",textAlign:"center"}}>Available Appointment on {date.toDateString()}</h2>
           <div className="d-flex">
           <div className="row">
            {
                bookingData.map(booking => <BookingCard key ={booking.id} booking ={booking}date ={date}></BookingCard>)
            }
            </div>
           </div>
        </div>
    );
};

export default BookAppointment;