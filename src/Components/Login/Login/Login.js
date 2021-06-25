import React, { useContext } from 'react';
import login from '../../../images/login.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase-config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser);
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
   
      let history = useHistory();
      let location = useLocation();
      let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogle = (e) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            const {displayName, email} = result.user
            const signInUser = {name:displayName , email:email }
            console.log(signInUser);
            setLoggedInUser(signInUser)
            history.replace(from);
            console.log(result)
          var credential = result.credential;
      
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          console.log(error);
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
         
        });

    }
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
                    
                    <button  style={{ padding: "10px 44%" }} className="btn btn-primary">Sign in</button>
                </form>
               <div className="container-fluid row col-md-6 pt-3 ">
               <button onClick = {handleGoogle } style={{ padding: "10px 4%" }} className="btn btn-primary">Google Sign in</button>
              
               </div>
            </div>
            <div className="col-md-6">
                <img style={{height:" 94.7vh"}} src={login} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Login;