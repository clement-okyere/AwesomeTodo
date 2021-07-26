import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import routes from "../../../utils/routes";
import MenuItem from "../../../Components/MenuItem"



type IMainProps = {
  className?: string;
};


const StyledNav = styled.div`
  flex: 1;
  background: #dfe1ee;
  padding: 2em 4em 1em 0em;
`;

const StyledContent = styled.div`
  flex: 8;
  padding: 2em;
`;

const StyledNavUl = styled.ul`
  list-style-type: none;
`;

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5em;
`;


// Content Area
const Main = ({ className }: IMainProps) => {
  return (
    <div className={className}>
      <StyledNav>
        <StyledNavUl>
                  {routes.map((route, index) =>
                      <StyledMenuItem
                          route={route}
                      />
                  )}
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


