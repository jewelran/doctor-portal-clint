import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form"; 
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "30%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  console.log(date);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
     data.title = appointmentOn.title;
     data.date = date;
     date.create= new Date();
          fetch("http://localhost:5000/addAppointment",{
            method:"POST",
            headers:{"content-Type": "application/json"},
            body: JSON.stringify(data)
           })
           .then(res => res.json())
           .then(success => {
             if (success) {
              closeModal()
              alert("thanks for create appointment.")
             }
           })
        
    };

  return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="btn btn-primary">
          Close
        </button>
        <h2 style={{ color: "#1CC7C1", textAlign: "center" }}>
          {appointmentOn.title}
        </h2>
        <p className ="text-center text-secondary">{date.toDateString()}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
            className ="w-75"
              placeholder="select time"
              {...register("time", { required: true })}
            />
            <br />
            {errors.time && (
              <span className="text-danger">this Time is required</span>
            )}
          </div>
          <div className="form-group">
          <input
             className ="w-75"
              placeholder="your name"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <span className="text-danger">This number is required</span>
            )}
          </div>
          <div className="form-group">
            <input
             className ="w-75"
              placeholder="Phone number"
              {...register("number", { required: true })}
            />
            <br />
            {errors.number && (
              <span className="text-danger">This number is required</span>
            )}
          </div>
          <div className="form-group">
            <input
             className ="w-75"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-danger">This email is required</span>
            )}
          </div>
          <input value="send" type="submit" />
        </form>
      </Modal>
    
  );
};

export default AppointmentForm;
