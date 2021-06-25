import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AddDoctors = () => {
    const [info , setInfo] = useState({})
    const [file, setFile] = useState(null)
    console.log(file, info);
    const handleBlur = e => {
        console.log(e.target.value);
            const newInfo = {...info};
            newInfo[e.target.name] = e.target.value;
            setInfo(newInfo)
            e.preventDefault();   
    }
    const handleChange = e => {
        const UploadImg = e.target.files[0]
        setFile(UploadImg)

    }
    
    const handleSubmit =  () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('email', info.email)
        formData.append('name', info.name)
       
      
        fetch('http://localhost:5000/addADoctors', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          if (data) {
              alert("data Upload successfully.")
          }
         if (!data) {
           alert("Oh on something wrong")
         }
        })
        .catch(error => {
          console.error(error)
        })
    }
  return (
    <div style={{backgroundColor: "#F4FDFB"}} className="container-fluid row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div  className="col-md-5 p-4 pr-5">
        <h2>this is add doctors</h2>

        <form onSubmit = {handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              onBlur = { handleBlur}
              type="email"
              class="form-control"
              name="email"
              placeholder="Enter email"
            />
           
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Name</label>
            <input
              onBlur = {handleBlur}
              type="text"
              class="form-control"
              name="name"
              placeholder="name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Upload image</label>
            <input
                onChange = {handleChange}
              type="file"
              class="form-control"
              name="exampleInputPassword1"
              placeholder="Upload Image"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;
