import React from 'react';
import styled from "../HeaderStyled.module.css";
import { withRouter, NavLink } from "react-router-dom";

const HeaderList = ({route,token}) => {
    return (
     <>
      {!route.isPrivate && !route.isRestricted &&(<li className={styled.navigationListItem} key={route.path}>
       <NavLink
        to={route.path}
        exact={route.exact}
        token={token}
        className={styled.navigationListItemAnchor}
        activeClassName={styled.navigationListItemActive}
       >
        {route.name}
       </NavLink>
      </li>) }


{route.isPrivate && token &&(<li className={styled.navigationListItem} key={route.path}>
       <NavLink
        to={route.path}
        exact={route.exact}
        token={token}
        className={styled.navigationListItemAnchor}
        activeClassName={styled.navigationListItemActive}
       >
        {route.name}
       </NavLink>
      </li>)}


{!route.isPrivate && route.isRestricted && !token &&(<li className={styled.navigationListItem} key={route.path}>
       <NavLink
        to={route.path}
        exact={route.exact}
        token={token}
        className={styled.navigationListItemAnchor}
        activeClassName={styled.navigationListItemActive}
       >
        {route.name}
       </NavLink>
      </li>)}

     </>
    );
}

export default withRouter(HeaderList);