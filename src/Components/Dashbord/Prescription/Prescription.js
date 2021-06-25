import React, { useState } from 'react';
import PrescriptionDataTable from '../PrescriptionDataTable/PrescriptionDataTable';
import Sidebar from './../Sidebar/Sidebar';
import { useEffect } from 'react';

const Prescription = () => {
    const [prescription, setPrescription] = useState([])
    useEffect(() => {
        fetch("https://stark-reaches-28571.herokuapp.com/appointment")
        .then(res => res.json())
        .then(data => setPrescription(data))
    },[])
    return (
        <div style={{backgroundColor: "#F4FDFB"}}className ="container-fluid row mt-3">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 ">
                    <PrescriptionDataTable prescription ={prescription}></PrescriptionDataTable>
            </div>
        </div>
    );
};

export default Prescription;