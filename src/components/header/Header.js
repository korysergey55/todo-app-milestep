import React from "react";
import styled from "./HeaderStyled.module.css";
import { withRouter, NavLink } from "react-router-dom";
import { mainRoutes } from "../../routs/mainRout";
import { useDispatch, useSelector } from "react-redux";
import {
 authTokenSelector,
 authUserSelector,
} from "../../redax/auth/authSelectors";
import { logoutUserAction } from "../../redax/auth/authActions";

const Header = () => {
 const token = useSelector(authTokenSelector);
 const dispatch = useDispatch();
 const user = useSelector(authUserSelector);
 return (
  <>
   <ul className={styled.navigationList}>
    {mainRoutes.map((route) => (
     <li className={styled.navigationListItem} key={route.path}>
      <NavLink
       to={route.path}
       exact={route.exact}
       className={styled.navigationListItemAnchor}
       activeClassName={styled.navigationListItemActive}
      >
       {route.name}
      </NavLink>
     </li>
    ))}

    {token && (
     <>
      <li className={styled.navigationListItem}>
       <NavLink
        onClick={() => dispatch(logoutUserAction())}
        to="/logout"
        className={styled.navigationListItemAnchor}
        activeClassName={styled.navigationListItemActive}
       >
        Logout
       </NavLink>
      </li>
       <h2 className={styled.navigationUser}>{user}</h2>
     </>
    )}
   </ul>
  </>
 );
};

export default withRouter(Header);
