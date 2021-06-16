import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
const DoctorsDetails = ({ doctor }) => {
  return (
    <div>
      <div className="pb-5">
        <img style={{}} className="w-100" src={doctor.img} alt="" />
        <div className ="text-center">
          <h3>{doctor.name}</h3>
          <big className="text-secondary"><FontAwesomeIcon style ={{color:"#8DD9D9"}} icon={faPhoneAlt}/> {doctor.call}</big>
        </div>
      </div>
    </div>
  );
};

export default DoctorsDetails;
