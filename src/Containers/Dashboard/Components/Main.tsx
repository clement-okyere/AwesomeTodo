import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import routes from "../../../utils/routes";

type IMainProps = {
  className?: string;
};


const StyledNav = styled.div`
  flex: 1;
  background: #dfe1ee;
  padding: 2em;
`;

const StyledContent = styled.div`
  flex: 8;
  padding: 2em;
`;

const StyledNavUl = styled.ul`
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
// Content Area
const Main = ({ className }: IMainProps) => {
  return (
    <div className={className}>
      <StyledNav>
        <StyledNavUl>
          {routes.map((route, index) => (
            <li key={index}>
              <StyledLink to={route.path}>{route.name}</StyledLink>
            </li>
          ))}
        </StyledNavUl>
      </StyledNav>

      <StyledContent>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </StyledContent>
    </div>
  );
};

export default Main;