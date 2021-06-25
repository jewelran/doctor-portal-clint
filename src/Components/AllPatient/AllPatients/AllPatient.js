import React, { useState } from 'react';
import { useEffect } from 'react';
import PatientTable from '../PatientTable/PatientTable';
import Sidebar from './../../Dashbord/Sidebar/Sidebar';

const AllPatient = () => {
    const [doctorAppointments, setDoctorAppointment] = useState([])
    useEffect(() => {
            fetch("http://localhost:5000/appointment")
            .then(res => res.json())
            .then(data => setDoctorAppointment(data))
    },[])
    return (
        <div className=" container-fluid row p-3">
            <div className="col-md-2">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h1 style ={{color:"#8DD9D9"}}>All Patient</h1>
           <PatientTable appointment = {doctorAppointments}></PatientTable>
            </div>
           
        </div>
    );
};

export default AllPatient;