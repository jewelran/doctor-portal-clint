import React from 'react';
import chair from'../../../images/chair.png';
import "./Header.css"
const HeaderMain = () => {
    return (
        <main style ={{height:"600px"}} className = "row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Your new style smile Start here.</h1>
                <p className = "text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit in exercitationem quod corporis, alias at molestias dignissimos excepturi ut deserunt placeat modi obcaecati possimus tenetur quisquam, dolorum odit voluptatem!</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;