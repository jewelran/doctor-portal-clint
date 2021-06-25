import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
const DoctorsDetails = ({ doctor }) => {
  console.log(doctor.image.img);
  return (
    <div className = "container-fluid">
      <div className="pb-5 container  col-md-6 ">
       <div  className=" img-fluid ">
    
       {doctor.image.img ?<img style ={{width: "200px", height:"200px"}} className = "rounded" src={`data:image/png;base64,${doctor.image.img}`}/>: <h2>Doctors not found</h2> }
        
       </div>
        <div className ="text-center">
          <h3>{doctor.name}</h3>
          <big className="text-secondary"><FontAwesomeIcon style ={{color:"#8DD9D9"}} icon={faPhoneAlt}/> +9166664864565</big>
        </div>
      </div>
    </div>
  );
};

export default DoctorsDetails;
