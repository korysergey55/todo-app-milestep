import React from "react";
import { mainRoutes } from "../../routs/mainRout";
import { Switch } from "react-router-dom";
import PrivateRoute from "../../routs/PrivateRoute";
import PublicRoute from "../../routs/PublicRoute";

const Main = () => {
 return (
  <>
   <Switch>
    {mainRoutes.map((route) =>
     route.isPrivate ? (
      <PrivateRoute
       path={route.path}
       exact={route.exact}
       component={route.component}
       key={route.path}
       //   token={token}
      />
     ) : (
      <PublicRoute
       path={route.path}
       exact={route.exact}
       isRestricted={route.isRestricted}
       component={route.component}
       key={route.path}
       //   token={token}
      />
     )
    )}
   </Switch>
  </>
 );
};

export default Main;
