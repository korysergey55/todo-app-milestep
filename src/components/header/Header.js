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
import HeaderList from "./headerList/HeaderList";

const Header = () => {
 const token = useSelector(authTokenSelector);
 const dispatch = useDispatch();
 const user = useSelector(authUserSelector);
 return (
  <>
   <ul className={styled.navigationList}>
    {mainRoutes.map((route) => (
     <HeaderList route={route} token={token} key={route.path} />
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
