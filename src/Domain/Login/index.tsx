import React from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
   const history = useHistory();

   const dashboardClickHandler = () => {
     history.push("/dashboard");
   };

    return(
    <>
        <h1>Login in page</h1>
        <button onClick={dashboardClickHandler}>Proceed to dashboard</button>
        </>
    )
};

export default LoginPage;
