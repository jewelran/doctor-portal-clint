import React from "react";
import { Table } from "react-bootstrap";

const AppointmentByDate = ({ appointments }) => {
  console.log(appointments);
  return (
    <div>
      <h1>total : {appointments.length}</h1>
      <div className="">
        <Table striped bordered hover>
          <thead>
            <tr className = "text-secondary">
              <th>Sl</th>
              <th>Name</th>
              <th>time</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length ? (
              appointments.map((appointment, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{appointment.name}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.number}</td>
                  <td>
                    <select name="" id="">
                      <option value="not Visited">Not Visited</option>
                      <option value="not Visited"> Visited</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <h5 className="text-center p-5 text-secondary">appointment is empty , select your date</h5>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AppointmentByDate;
