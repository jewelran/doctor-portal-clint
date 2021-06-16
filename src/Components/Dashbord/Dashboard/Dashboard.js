import React, { useState } from "react";
import AppointmentByDate from "../AppointmentsByDate/AppointmentByDate";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useEffect } from "react";
const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
  padding: "10px",
};

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate);
  const [appointments , setAppointment] = useState([])
  console.log(appointments);
  const handleChange = (data) => {
    setSelectedDate(data);
    // fetch("http://localhost:5000/appointmentByDate", {
    //     method:"POST",
    //     headers: {"content-Type": "application/json"},
    //     body: JSON.stringify({data})
    //  })
    //  .then(res => res.json())
    //  .then(data => setAppointment(data))
  };

  useEffect(() => {
    fetch("http://localhost:5000/appointmentByDate", {
        method:"POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify({data: selectedDate})
     })
     .then(res => res.json())
     .then(data => setAppointment(data))
  },[selectedDate])
  return (
    <section className="">
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-5">
          <h1>calendar</h1>
          <Calendar onChange={handleChange} value={new Date()} />
        </div>
        <div className="col-md-5">
          <AppointmentByDate appointments = {appointments}></AppointmentByDate>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
