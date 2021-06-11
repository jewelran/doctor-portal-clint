import React from 'react';
import mask from '../../../images/Mask.png'
import "./Exceptional.css"
const Exceptional = () => {
    return (
        <section style ={{marginTop:"10rem"}} className ="d-flex pb-4">
            <div className="md-col-6">
                <img style ={{height :" 80%"}} src={mask} alt="" />
            </div>
            <div  className="md-col-6 exceptional-text  ">
                    <h1>Exceptional Dental Care , on Your terms</h1>
                    <p className="pt-4 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, officiis rem nihil rerum necessitatibus vero quia quos enim, et delectus, nam adipisci fugit exercitationem. Sequi animi officiis ipsum? Voluptatibus, explicabo.</p>

                    <button className="btn btn-primary">Learn More</button>
            </div>
        </section>
    );
};

export default Exceptional;