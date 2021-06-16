import React from 'react';
import DoctorsDetails from '../DoctorsDetails/DoctorsDetails';
import doctor from "../../../images/doctor1.png";
const Doctors = () => {
    const doctors = [
        {
            name: "Dr.Caudi",
            call: "+15697854124",
            img:doctor
            
        },
        {
            name: "Dr.John",
            call: "+15697854124",
            img:doctor
        },
        {
            name: "Dr.Smith",
            call: "+15697854124",
            img:doctor
        }
    ]
    return (
        <div>
            <div className="">
                <h1 style ={{color:"#8DD9D9"}} className= "text-center mt-5 mb-5">Our Doctors</h1>
            </div>
            <div className=" d-flex justify-content-center">
                {
                    doctors.map(doctor => <DoctorsDetails doctor = {doctor}></DoctorsDetails>)
                }
            </div>
        </div>
    );
};

export default Doctors;