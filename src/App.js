import React from "react";
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

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route path = "/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path = "/dashboard/appointment">
            <Dashboard></Dashboard>
          </Route>
          <Route path = "/login">
            <Login></Login>
          </Route>
       
        </Switch>
      </Router>
    </div>
  );
}

export default App;
