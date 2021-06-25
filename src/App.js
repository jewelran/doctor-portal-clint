import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Dashboard from "./Components/Dashbord/Dashboard/Dashboard";
import Login from "./Components/Login/Login/Login";
import AllPatient from './Components/AllPatient/AllPatients/AllPatient';
import Prescription from "./Components/Dashbord/Prescription/Prescription";
import AddDoctors from "./Components/Dashbord/AddDoctors/AddDoctors";
import PrivetRoute from './Components/Login/Login/PrivetRoute';
export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route exact path = "/home">
            <Home></Home>
          </Route>
          <Route path = "/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path = "/login">
            <Login></Login>
          </Route>
        <PrivetRoute path = "/dashboard/appointment">
          <Dashboard></Dashboard>
        </PrivetRoute>
        <Route path = "/allPatient/appointment">
          <AllPatient></AllPatient>
        </Route>
        <Route path = "/dashboard/prescription">
          <Prescription></Prescription>
        </Route>
        <Route path = "/dashboard/addDoctors">
          <AddDoctors></AddDoctors>
        </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
