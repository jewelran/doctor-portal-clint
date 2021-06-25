import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faCog, faFileAlt, faHome, faSignOutAlt, faTh, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserContext } from './../../../App';
const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [doctors, setDoctor] = useState([])
  console.log("doctor", doctors, loggedInUser);  
  useEffect(() => {
          fetch("http://localhost:5000/isDoctors",{
            method:"POST",
            headers: {"content-Type": "application/json"},
            body: JSON.stringify({email: loggedInUser.email})
          })
          .then(res => res.json())
          .then(data => setDoctor(data))

  },[])
  return (
    <div className="sidebarContainer">
      <div className="linkContainer"
        style={{ lineHeight: "3rem", listStyle: "none", fontSize: "1.3rem" }}
        className="pt-5 pl-3 "
      >
        <div>
          <Link style = {{textDecoration:"none"}} >
          <FontAwesomeIcon icon ={faTh}/> <span>Dashboard</span>
          </Link>
        </div>
        
      {doctors && 
      <div className="">
          <div>
          <Link style = {{textDecoration:"none"}} to="/dashboard/appointment">
            <FontAwesomeIcon icon={faCalendarCheck} /> <span>Appointment</span>
          </Link>
        </div>
        <div>
          <Link style = {{textDecoration:"none"}} to="/allPatient/appointment">
          <FontAwesomeIcon icon ={faUserFriends}/> <span>Patient</span>
          </Link>
        </div>
        <div>
          <Link style = {{textDecoration:"none"}} to="/dashboard/prescription">
          <FontAwesomeIcon icon ={faFileAlt}/> <span>Prescription</span>
          </Link>
        </div>
        <div>
          <Link style = {{textDecoration:"none"}} to="/dashboard/addDoctors">
          <FontAwesomeIcon icon ={faFileAlt}/> <span>Add Doctors</span>
          </Link>
        </div>
        <div>
          <Link style = {{textDecoration:"none"}}>
          <FontAwesomeIcon icon ={faCog}/> <span>Setting</span>
          </Link>
        </div>
      </div>
      }
      <div>
          <Link to = "/home" style = {{textDecoration:"none"}} >
          <FontAwesomeIcon icon ={faHome}/> <span>Go To Home</span>
          </Link>
        </div>
      </div>
      <div style={{cursor:"pointer"}} className=" container-fluid  text-white">
      <FontAwesomeIcon icon ={faSignOutAlt}/> <span onClick ={() => setLoggedInUser({})}>Log Out</span>
      </div>
    </div>
  );
};

export default Sidebar;
