import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
    const history = useHistory();

    const loginClickHandler = () => {
        history.push('/login');
    }
 
    return(
    <>
        <h1>Welcome to the home page</h1>
        <button onClick={loginClickHandler}>Proceed to login</button>
        </>
    )
}

export default HomePage;