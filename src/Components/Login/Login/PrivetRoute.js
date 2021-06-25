import React, { useContext, createContext, useState } from "react";
import { UserContext } from '../../../App';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
  } from "react-router-dom";
const PrivetRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <Route
        {...rest}
        render={({ location }) =>
        loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivetRoute;