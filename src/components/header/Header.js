import React from "react";
import styled from "./HeaderStyled.module.css";
import { mainRoutes } from "../../routs/mainRout";
import HeaderList from "./headerList/HeaderList";
import { withRouter, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
 authTokenSelector,
 authUserSelector,
} from "../../redax/auth/authSelectors";
import { logoutUserAction } from "../../redax/auth/authActions";

const Header = () => {
 const token = useSelector(authTokenSelector);
 const user = useSelector(authUserSelector);
 const dispatch = useDispatch();

 return (
  <>
   <ul className={styled.navigationList}>
    <h2 className={styled.headerTitle}>ToDoTasksMileStep</h2>
    {mainRoutes.map((route) => (
     <HeaderList route={route} token={token} key={route.path} />
    ))}

    {token && (
     <>
      <li className={styled.navigationListItem}>
       <NavLink
        onClick={() => dispatch(logoutUserAction())}
        to="/login"
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
