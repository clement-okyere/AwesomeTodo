import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { logInValidationSchema } from "../../utils/schema";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import './style.css';
import { getItem, setItem } from "../../utils/helpers";
import GoogleLogin from "react-google-login";
import axios from "axios";

interface Values {
  email: string;
  password: string;
}


const LoginPage = () => {
  const history = useHistory();
  
  const token = getItem("token");
  
    React.useEffect(() => {
      if (token) history.push("/dashboard");
    });

   const accountCreateClickHandler = () => {
     history.push("/signup");
    };
  
   const submitLoginFormHandler = async (values: Values) => {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_TODO_API}/auth/login`,
          values
        );
        setItem("token", data);
        history.push("/dashboard");
      } catch (err) {
        console.log("an error occurred", err);
      }
    };
  
  
  
  const handleLogin = async (googleData) => {
     axios({
      url: `${process.env.REACT_APP_TODO_API}/auth/login/google`,
      method: "POST",
      data: { token: googleData.tokenId },
    }).then(response => {
      // console.log(response, response.data);
      if (response.data) {
        setItem("token", response.data);
        history.push("/dashboard");
      }
    })
      .catch((err) => {
        console.log("an error occurred");
    })
  };

    return (
      <div className="login_page">
        <div className="left">
          <div className="sub_left">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={logInValidationSchema}
               onSubmit={async (
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                setSubmitting(true);
                await submitLoginFormHandler(values);
                setSubmitting(false);
              }}
            >
              {(formik) => (
                <Form>
                  <div className="heading">
                    <h2>Login</h2>
                    <span className="subheading">
                      Expedite your daily planning!
                    </span>
                  </div>

                  <div className="social_login">
                    {/* <button>Sign in with Google</button> */}
                    <GoogleLogin
                      clientId={
                        process.env.REACT_APP_GOOGLE_CLIENT_ID as string
                      }
                      render={(renderProps) => (
                        <button
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          {" "}
                          Sign in with Google
                        </button>
                      )}
                      buttonText="Log in with Google"
                      onSuccess={handleLogin}
                      onFailure={handleLogin}
                      cookiePolicy={"single_host_origin"}
                    />
                  </div>

                  <div className="email_sign_in">
                    <h4>
                      <span>or Sign in with email</span>
                    </h4>

                    <Input
                      label="Email*"
                      type="text"
                      id="email"
                      placeholder="email"
                      cssclass="form_group"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="error">{formik.errors.email}</div>
                    ) : null}

                    <Input
                      label="Password*"
                      type="password"
                      id="password"
                      placeholder="password"
                      cssclass="form_group"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="error">{formik.errors.password}</div>
                    ) : null}

                    <div className="miscellaneous">
                      <div className="remember_me">
                        <input id="remember_me" type="checkbox" />
                        <label htmlFor="remember_me">Remember me</label>
                      </div>
                      <span className="forgot_password">Forgot password?</span>
                    </div>

                    <Button
                      type="submit"
                      // clickHandler={dashboardClickHandler}
                      className="submit_btn"
                      disabled={!(formik.isValid && formik.dirty)}
                    >
                      Login
                    </Button>

                    <div className="signup_info">
                      <span>
                        Not registered yet? &nbsp;
                        <a href="#" onClick={accountCreateClickHandler}>
                          Create an account
                        </a>
                      </span>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <div className="right">Hello</div>
      </div>
    );
};

export default LoginPage;
