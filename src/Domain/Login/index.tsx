import React from "react";
import { useHistory } from "react-router-dom";
import './style.css';

const LoginPage = () => {
   const history = useHistory();

   const dashboardClickHandler = () => {
     history.push("/dashboard");
   };

    return (
      <div className="login_page">
        <div className="left">
          <div className="sub_left">
            <div className="heading">
              <h2>Login</h2>
              <span className="subheading">
                Expedite your daily planning process!
              </span>
            </div>

            <div className="social_login">
              <button>Sign in with Google</button>
            </div>

            <div className="email_sign_in">
              <h4>
                <span>or Sign in with email</span>
              </h4>

              <div className="form_group">
                <label htmlFor="email">Email*</label>
                <input id="email" type="email" placeholder="email" />
              </div>

              <div className="form_group">
                <label htmlFor="password">Password*</label>
                <input id="password" type="password" placeholder="password" />
              </div>

              <div className="miscellaneous">
                <div className="remember_me">
                  <input id="remember_me" type="checkbox" />
                  <label htmlFor="remember_me">Remember me</label>
                </div>
                <span className="forgot_password">Forgot password?</span>
              </div>

              <div className="submit_btn">
                <button type="submit"
                  onClick={dashboardClickHandler}>
                  Login
                </button>
              </div>

              <div className="signup_info">
                <span>
                  Not registered yet? <a href="">Create an account</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="right">Hello</div>
      </div>
    );
};

export default LoginPage;
