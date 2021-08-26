import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ path, exact, component, token }) => {
 return !token ? (
  <Redirect to="/login" />
 ) : (
  <Route path={path} exact={exact} component={component} key={path} />
 );
};

export default PrivateRoute;
