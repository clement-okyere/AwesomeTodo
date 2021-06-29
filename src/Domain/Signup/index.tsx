import React from "react";
import { useHistory, Link } from "react-router-dom";
import "./style.css";

const SignupPage = () => {
  const history = useHistory();

  const dashboardClickHandler = () => {
    history.push("/dashboard");
  };

  return (
    <div className="signup_page">
      <div className="left">
        <div className="sub_left">
          <div className="heading">
            <h2>Sign Up</h2>
            <span className="subheading">
              Expedite your daily planning process!
            </span>
          </div>

          <div className="social_signup">
            <button>Sign up with Google</button>
          </div>

          <div className="email_signup">
            <h4>
              <span>or Sign up with email</span>
            </h4>

            <div className="form_group">
              <label htmlFor="email">Email*</label>
              <input id="email" type="email" placeholder="email" />
            </div>

            <div className="form_group">
              <label htmlFor="password">Password*</label>
              <input id="password" type="password" placeholder="password" />
            </div>

            <div className="t_and_c">
              <div className="remember_me">
                <input id="remember_me" type="checkbox" />
                <label htmlFor="remember_me">
                  I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>

            <div className="submit_btn">
              <button type="submit" onClick={dashboardClickHandler}>
                Sign Up
              </button>
            </div>

            <div className="login_info">
              <span>
               Already have an account <a href="/signin">Sign in</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="right"></div>
    </div>
  );
};

export default SignupPage;
