import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className = "col-md-4 text-center">
            <img style ={{height :" 50px"}} src={service.img} alt="" />
            <h5 className ="text-secondary mt-4 mb-4">{service.name}</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci voluptas dolores magni mollitia repellat ipsam quo facilis beatae quis nihil?</p>
        </div>
    );
};

export default ServiceDetails;