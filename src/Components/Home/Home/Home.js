import React from 'react';
import Appointment from '../Appointment/Appointment';
import Exceptional from '../Exceptional/Exceptional';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className = "container">
          <Header></Header>
          <Services></Services>
          <Exceptional></Exceptional>
          <Appointment></Appointment>
        </div>
    );
};

export default Home;