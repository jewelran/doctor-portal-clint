import React from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import ellipse from "../../../images/ellipse.png";
import ellipse1 from "../../../images/Ellipse1.png";
import ellipse2 from "../../../images/Ellipse2.png";
import "./Testimonial.css"

const Testimonial = () => {
    const users = [
        {
            name: "Winson Herry",
            country:"California",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, neque, culpa non voluptates reprehenderit sequi placeat tenetur consequatur aperiam veritatis, laboriosam omnis quas iusto quasi asperiores soluta unde! Quia, voluptate?",
            images: ellipse,

        },
        {
            name: "Winson Smith",
            country:"California",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, neque, culpa non voluptates reprehenderit sequi placeat tenetur consequatur aperiam veritatis, laboriosam omnis quas iusto quasi asperiores soluta unde! Quia, voluptate?",
            images: ellipse2
            
        },
        {
            name: "John Mitchel",
            country:"California",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, neque, culpa non voluptates reprehenderit sequi placeat tenetur consequatur aperiam veritatis, laboriosam omnis quas iusto quasi asperiores soluta unde! Quia, voluptate?",
            images: ellipse1

        }
    ]
    return (
        <div  className="row p-2 pt-5">
            <div className="">
            <div className=" testimonial-header">
                <h5 style ={{color:"#8DD9D9"}}>TESTIMONIAL</h5>
                <h1 style ={{fontSize:"50px",color:"#203047"}}>What's Ours Patients</h1>
                <h1>Says</h1>
            </div>
            <div className="d-flex text-center pt-4">
                {
                    users.map(user => <TestimonialDetails user ={user}></TestimonialDetails>)
                }
            </div>
            </div>
        </div>
    );
};

export default Testimonial;