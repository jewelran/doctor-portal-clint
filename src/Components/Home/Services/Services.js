import React from 'react';
import fluoride from '../../../images/fluorite.png';
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png"
import ServiceDetails from '../ServiceDetails/ServiceDetails';
const Services = () => {
    const ServicesData =[{
        name: "Fluoride treatment",
        img: fluoride,
    },
    {
        name: "Fluoride treatment",
        img: cavity,
    },
    {
        name: "Fluoride treatment",
        img:whitening,
    }
]
    return (
        <section className ='mt-5 mb-5 '>
        <div className="text-center mb-5 ">
        <h5 style ={{color:'#6ACECE'}}>Our services</h5>
            <h2>services we provide</h2>
        </div>
        <div className="d-flex justify-content-center">
     <div className="w-75 row pt-4 ">
     {ServicesData.map((services) => (
        <ServiceDetails service ={services}></ServiceDetails>
      ))}
     </div>
    </div>
        </section>
    );
};

export default Services;