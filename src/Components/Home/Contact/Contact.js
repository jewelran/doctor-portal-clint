import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="pb-5 mb-5 contactContainer d-flex justify-content-center">
      <div className="p-4">
        <div className="">
          <h4 style={{ color: "#8DD9D9" }}> CONTACT US</h4>
          <h1 className="text-white">Always Contact with us</h1>
        </div>
        <div className="">
          <form>
            <input
              className="d-flex justify-content-center p-4"
              style={{ width: "100%" }}
              type="text"
              name=""
              id=""
              placeholder="Email Address*"
            />
            <br />
            <input
              className="d-flex justify-content-center p-4"
              style={{ width: "100%", height: "50px" }}
              type="text"
              name=""
              id=""
              placeholder="Subject*"
            />
            <br />
            <input
              className="d-flex justify-content-center p-4"
              style={{ width: "100%", height: "100px" }}
              type="row-10"
              name=""
              id=""
              placeholder="Your message"
            />
            <br />
            <button
              style={{ padding: "10px 50px" }}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
