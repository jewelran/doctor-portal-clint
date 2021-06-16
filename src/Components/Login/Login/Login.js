import React from 'react';
import login from '../../../images/login.png'
const Login = () => {
    return (
        <div className="container pt-5">
            <div className="row">
            <div style ={{boxShadow:"rgb(0 123 255 / 12%) -4px 5px 10px",height:"450px"}} className="col-md-6 mb-5 rounded p-5">
                <h1 className ="text-secondary pb-3 text-center">Login</h1>
                <form action="">
                    <input style={{ width: "100%", height: "50px",padding:"10px" }} type="text" name="" id="" placeholder="enter your email*" />
                    <br />
                    <br />
                    <input style={{ width: "100%", height: "50px", padding:"10px" }} type="text" name="" id=""  placeholder="your password*" />
                    <br />
                    <br />
                    <a  className="text-danger" href="/#">Forget Your Password?</a>
                    <br />
                    <br />
                    <button style={{ padding: "10px 44%" }} className="btn btn-primary">Sign in</button>
                  
                </form>
            </div>
            <div className="col-md-6">
                <img style={{height:" 94.7vh"}} src={login} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Login;