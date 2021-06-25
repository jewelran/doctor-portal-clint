import React from 'react';
import { Table } from 'react-bootstrap';

const PrescriptionDataTable = ({prescription}) => {
    return (
        <div className="container-fluid row">
            <h1 style = {{color:"#8DD9D9"}} className ="p-3">All Prescription</h1>
            <Table striped bordered hover>
  <thead>
    <tr className ="text-secondary">
      <th>sl. No</th>
      <th>Date</th>
      <th>Email</th>
      <th>Contact</th>
      <th>Prescription</th>
    </tr>
  </thead>
  <tbody>
        {prescription.map((prescription, index) => 
            <tr>
                <td>{index + 1}</td>
                <td>{prescription.date}</td>
                <td>{prescription.date}</td>
                <td>{prescription.email}</td>
                <button className="btn btn-primary w-50 m-2">View</button>
            </tr>
            )}
  </tbody>
</Table>
        </div>
    );
};

export default PrescriptionDataTable;