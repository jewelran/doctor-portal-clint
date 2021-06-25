import React, { useState } from 'react';
import DoctorsDetails from '../DoctorsDetails/DoctorsDetails';
import { useEffect } from 'react';
const Doctors = () => {
    const [doctors, setDoctor] = useState([])
    useEffect(() => {
        fetch("https://stark-reaches-28571.herokuapp.com/doctors")
        .then(res => res.json())
        .then(data => setDoctor(data))
    },[])

   
    return (
        <div className = "container">
            <div className="">
                <h1 style ={{color:"#8DD9D9"}} className= "text-center mt-5 mb-5">Our Doctors</h1>
            </div>
            <div 
             className=" d-flex">
                {
                    doctors.map(doctor => <DoctorsDetails doctor = {doctor}></DoctorsDetails>)
                }
            </div>
        </div>
    );
};

export default Doctors;