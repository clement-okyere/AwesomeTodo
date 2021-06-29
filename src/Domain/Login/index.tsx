import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import Input from "../../Components/Input";
import './style.css';

interface Values {
  email: string;
  password: string;
}


const LoginPage = () => {
   const history = useHistory();

   const dashboardClickHandler = () => {
     history.push("/dashboard");
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
              onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 500);
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
                    <button>Sign in with Google</button>
                  </div>

                  <div className="email_sign_in">
                    <h4>
                      <span>or Sign in with email</span>
                    </h4>

                    <Input
                      label="Email*"
                      type="email"
                      id="email"
                      placeholder="email"
                      cssclass="form_group"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div>{formik.errors.email}</div>
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
                      <div>{formik.errors.password}</div>
                    ) : null}

                    <div className="miscellaneous">
                      <div className="remember_me">
                        <input id="remember_me" type="checkbox" />
                        <label htmlFor="remember_me">Remember me</label>
                      </div>
                      <span className="forgot_password">Forgot password?</span>
                    </div>

                    <div className="submit_btn">
                      <button
                        type="submit"
                        // onClick={dashboardClickHandler}
                      >
                        Login
                      </button>
                    </div>

                    <div className="signup_info">
                      <span>
                        Not registered yet? <a href="#">Create an account</a>
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
