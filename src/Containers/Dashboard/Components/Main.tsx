import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import routes from "../../../utils/routes";
import MenuItem from "../../../Components/MenuItem"
import Home from "../../../Domain/Dashboard/Home";
import Category from "../../../Domain/Category";
import Todo from "../../../Domain/TodoComponent";



type IMainProps = {
  className?: string;
};


const StyledNav = styled.div`
  flex: 1;
  background: #ebebf5;
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
  color: black;
`;


// Content Area
const Main = ({ className }: IMainProps) => {
  return (
    <div className={className}>
      <StyledNav>
        <StyledNavUl>
          {routes.map((route, index) => (
            <StyledMenuItem key={index} route={route} />
          ))}
        </StyledNavUl>
      </StyledNav>

      <StyledContent>
        <Switch>
          {/* Todo: Fix hooks not working in dynamically rendered routes issue */}
          {/* {routes.map((route, index) => (
           <Route key={index} path={route.path}
            exact={route.exact}
             />
            </Route>
          ))} */}

          <Route path="/dashboard/todos" exact={true}>
            <Todo />
          </Route>

          <Route path="/dashboard/categories">
            <Category />
          </Route>

          <Route path="/dashboard/">
            <Home />
          </Route>
        </Switch>
      </StyledContent>
    </div>
  );
};

export default Main;


