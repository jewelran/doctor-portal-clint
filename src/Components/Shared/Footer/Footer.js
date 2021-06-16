import React from 'react';
import "./Footer.css"
import {faFacebook, faGooglePlus,faTwitterSquare} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        <div className = " footerContainer pt-5 mb-5">
           <div className="d-flex justify-content-center">
           <div  style ={{lineHeight:"3rem",listStyle:"none"}} className="col-md-3 text-secondary">
                <li>Emergency Dental Create</li>
                <li>Check UP</li>
                <li>Treatment of Personal Diseases</li>
                <li>Tooth Extraction</li>
                <li>Check Up</li>
            </div>
            <div style ={{lineHeight:"3rem",listStyle:"none"}} className="col-md-3 text-secondary">
                <h1 style ={{color:"#1CC7C1"}}>Service</h1>
                <li>Emergency Dental Create</li>
                <li>Check UP</li>
                <li>Treatment of Personal Diseases</li>
                <li>Tooth Extraction</li>
                <li>Check Up</li>
                <li>Check Up</li>
                <li>Check Up</li>
            </div>
            <div style ={{lineHeight:"3rem",listStyle:"none"}} className="col-md-3 text-secondary ">
                <h1 style ={{color:"#1CC7C1"}}>Oral Health</h1>
                <li>Emergency Dental Create</li>
                <li>Check UP</li>
                <li>Treatment of Personal Diseases</li>
                <li>Tooth Extraction</li>
                <li>Check Up</li>
                <li>Check Up</li>
                <li>Check Up</li>
            </div>
            <div style ={{lineHeight:"3rem",listStyle:"none"}} className="col-md-3 text-secondary">
                <h1 style ={{color:"#1CC7C1"}}>Our Address</h1>
                <big>New york - 101010 hudson</big>
                <br />
                <big>Yards</big>
                <br />
               <div className="pt-5">
               <FontAwesomeIcon className ="mediaIcon" style ={{fontSize:"3rem", margin:"3px 2rem 2rem 0px"}} icon={faFacebook} />
                <FontAwesomeIcon className ="mediaIcon" style ={{fontSize:"3rem",margin:"3px 2rem 2rem 0px"}} icon={faGooglePlus} />
                <FontAwesomeIcon className ="mediaIcon"style ={{fontSize:"3rem", margin:"3px 2rem 2rem 0px"}} icon={faTwitterSquare} />
               </div>
                <br />
                <big>Call Now</big>
                <br />
                <button className="btn btn-primary">+2025550295</button>
            </div>
           </div>
           <p className= "text-center p-5 text-secondary fs-5">Copyright {(new Date()).getFullYear()} All Right Reserved</p>
        </div>
    );
};

export default Footer;