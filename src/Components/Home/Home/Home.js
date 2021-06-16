import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Exceptional from '../Exceptional/Exceptional';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../../Shared/Footer/Footer';
import Login from '../../Login/Login/Login';

const Home = () => {
    return (
        <div className = "container">
          <Header></Header>
          <Services></Services>
          <Exceptional></Exceptional>
          <Appointment></Appointment>
          <Testimonial></Testimonial>
          <Blog></Blog>
          <Doctors></Doctors>
          <Contact></Contact>
          <Footer></Footer>
         
        </div>
    );
};

export default Home;