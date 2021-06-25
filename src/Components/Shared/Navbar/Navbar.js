import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {
 const link = "/home"
    return (
    
    <div className="">
        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand text-dark " href="/home">Doctor Portal</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to  = "/home" className="nav-link mr-5 text-secondary">
           <FontAwesomeIcon /> <span>Home</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to  = "/about" className="nav-link mr-5 text-secondary">
           <FontAwesomeIcon /> <span>About</span>
          </Link>
         
        </li>
        <li class="nav-item">
        <Link to  = "/dashboard/appointment" className="nav-link mr-5 text-secondary">
           <FontAwesomeIcon /> <span>Dashboard</span>
          </Link>
        </li>
        <li class="nav-item">
        <Link to  = "/review" className="nav-link mr-5 text-white">
           <FontAwesomeIcon /> <span>Review</span>
          </Link>
        </li>
        <li class="nav-item">
        <Link to  = "/Blog" className="nav-link mr-5 text-white">
           <FontAwesomeIcon /> <span>Blog</span>
          </Link>
        </li>
        <li class="nav-item" className="nav-link mr-5 text-white">
        <Link to  = "/contact" >
           <FontAwesomeIcon /> <span>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
        );
};

export default Navbar;