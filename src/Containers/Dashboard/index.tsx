import React from "react";
import styled from "styled-components";
import "./style.css";
import { Search } from "../../Components/Search";
import { useHistory } from "react-router-dom";
import ProfileAvatar from "../../Components/ProfileAvatar";
import { getItem, removeItem } from "../../utils/helpers";
import ConfirmationDialog from "../../Components/Dialog/Confirmation";
import Main from "./Components/Main";


const StyledSearch = styled(Search)`
    height: 2em;
    width: 20em;
    padding: 0 0em 0 0.5em;
    border-radius: 1em;
    &:focus {
        outline: none;
    }
`;

const Logout = styled.span`
  margin: 0 0.2em 0 0;
  cursor: pointer;
`;

const StyledConfirmationDialog = styled(ConfirmationDialog)`
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  border: 1px solid grey;
  padding: 0.5em 2em 0.5em 2em;
  position: absolute;
  top: 50%;
  left: 40%;
  z-index: 1000;
  border-radius: 2em;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const StyledMain = styled(Main)`
  display: flex;
  height: 100%;
`;


const Dashboard = () => {
  const [showLogoutPrompt, setShowLogoutPrompt] = React.useState<boolean>(false);

const history = useHistory();
  
  const logOutClickHandler = () => {
    setShowLogoutPrompt(true);
};

React.useEffect(() => {
    const token = getItem("token");
    if (!token)
        history.push("/login");
  });

    return (
      <>
        <StyledConfirmationDialog
          visible={showLogoutPrompt}
          caption="Log out"
          question="Are you sure you want to log out?"
          actions={[
            {
              name: "OK",
              action: () => {
                removeItem("token");
                history.push("/login");
              },
            },
            {
              name: "Cancel",
              action: () => {
                setShowLogoutPrompt(false);
              },
            },
          ]}
        />

        <div className="wrapper">
          <header className="navbar">
            <ul className="navbar_items">
              <li className="nav_header">AwesomeTodo</li>
              <li className="nav_aux">
                <StyledSearch placeholder="search" />
              </li>
              <li className="nav_aux">
                <ProfileAvatar fullname="Clement Okyere" />
              </li>
              <li className="nav_aux">
                <Logout onClick={logOutClickHandler}>Log out</Logout>
              </li>
            </ul>
          </header>
          <article className="page-body">
            {/* Content Area Here */}
            <StyledMain />
          </article>
          <footer className="footer">
            Copyright &#169; 2021 Cleeoworld Innovation All rights reserved
          </footer>
        </div>
      </>
    );
}

export default Dashboard;