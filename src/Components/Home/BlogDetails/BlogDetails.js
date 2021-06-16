import React from "react";
import "./blogDetails.css";
import arrowRight from"../../../images/arrow-right-solid.svg"
const BlogDetails = ({ blog }) => {
  return (
    <section
      style={{ boxShadow: "5px 5px 10px gray", height: "400px" }}
      className="row col-md-4 m-2 mt-5 mb-5 p-3 justify-content-center blog-container"
    >
      <div className="d-flex mb-3">
        <img className="mr-4" src={blog.images} alt="" />
        <div className="">
          <h4>{blog.name}</h4>
          <big className="text-secondary">{blog.date}</big>
        </div>
      </div>
      <div className="mt-3">
        <h3>{blog.title}</h3>
        <big className="text-secondary">{blog.description}</big>
      </div>
      <div className="overlay2">
        <div className="overlay-content">
          <h4>{blog.name}</h4>
          <big className="text-secondary">{blog.date}</big>
          <div className="mt-5">
            <h3>{blog.title}</h3>
            <img className="arrowRightImg" src={arrowRight} alt="" />
          </div>
        </div>
        
      
      </div>
    </section>
  );
};

export default BlogDetails;
