import React from "react";
import { Table } from "react-bootstrap";

const PatientTable = ({ appointment }) => {
  return (
    <div className= " rew d-flex">
        <div className="col-md-10">
        <Table striped bordered hover>
        <thead>
          <tr className= "text-secondary">
            <th>Sl.No</th>
            <th>Email</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Contact</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {appointment.map((appointmentOn, index)=>
            <tr>
              <td>{index + 1}</td>
              <td>{appointmentOn.email}</td>
              <td>{appointmentOn.age}</td>
              <td>{appointmentOn.Weight}</td>
              <td>{appointmentOn.number}</td>
              <td>{appointmentOn.address}</td>
            </tr>
            )}
       
        </tbody>
      </Table>
        </div>
      
    </div>
  );
};

export default PatientTable;
