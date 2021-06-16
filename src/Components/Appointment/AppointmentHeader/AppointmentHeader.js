import React, { useState } from "react";
import chair from "../../../images/chair.png";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({handleChange}) => {
//   const [value, onChange] = useState(new Date())
 
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style ={{color:"#8DD9D9"}} className ="p-2">Appointment</h1>
        <div>
          <Calendar onChange={handleChange} value={new Date()} />
        </div>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default AppointmentHeader;
