import React from 'react';
import appointment from '../../../images/appointment.png'
import "./Appointment.css"
const Appointment = () => {
    return (
        <section style ={{marginTop:"10rem"}} className ="d-flex text-white appointment-container">
            <div  className="md-col-4 img-container">
                <img style ={{height :" 153%", width:"120%"}} src={appointment} alt="" />
            </div>
            <div  className="md-col-8">
                    <h5 style ={{color :"#6ACECE"}}>APPOINTMENT</h5>
                    <h1 style ={{fontSize:"50px"}}>Make an appointment span </h1>
                    <h1 style ={{fontSize:"50px"}}>Today</h1>
                    <p style ={{fontSize:"20px"}} className="pt-4 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, officiis rem nihil rerum necessitatibus vero quia quos enim, et delectus, nam adipisci fugit exercitationem. Sequi animi officiis ipsum? Voluptatibus, explicabo.</p>

                    <button className="btn btn-primary">Learn More</button>
            </div>
            <div className="overlay"></div>
        </section>
    );
};

export default Appointment;