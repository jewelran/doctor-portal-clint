import React from 'react';

const TestimonialDetails = ({user}) => {
    return (
        <div style ={{boxShadow:"5px 5px 10px gray",height:"350px"}} className ="m-2 rounded p-2">
           <div className="">
           <big className="text-secondary">{user.description}</big>
           </div>
           <div className="d-flex justify-content-center">
               <img className ="pr-3" src={user.images} alt="" />
               <div className="">
                   <h3 style ={{color:"#8DD9D9"}}>{user.name}</h3>
                   <big className ="text-secondary">{user.country}</big>
               </div>
           </div>

        </div>
    );
};

export default TestimonialDetails;