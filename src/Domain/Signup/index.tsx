import React from "react";
import { useHistory } from "react-router-dom";
import { signUpValidationSchema } from "../../utils/schema";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import "./style.css";
import { Form, Formik, FormikHelpers, useFormikContext } from "formik";
import axios from "axios";
import { getItem, setItem } from "../../utils/helpers";
import GoogleLogin from "react-google-login";

interface Values {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  agreement: boolean;
}

type IMySignUpFormProps = {
  clickHandler: (e: React.MouseEvent<HTMLButtonElement> | void) => void;
}

const SignupPage = () => {
  const history = useHistory();
  const token = getItem("token");

  React.useEffect(() => {
    if (token)
      history.push("/dashboard");
  })

  const dashboardClickHandler = () => {
    history.push("/dashboard");
  };

  const signInClickHandler = () => {
      history.push("/login");
  };

    const handleSignUp = async (googleData) => {
      const res = axios({
        url: `${process.env.REACT_APP_TODO_API}/auth/signup/google`,
        method: "POST",
        data: { token: googleData.tokenId },
      })
        .then((response) => {
          // console.log(response, response.data);
          if (response.data) {
            setItem("token", response.data);
            history.push("/dashboard");
          }
        })
        .catch((err) => {
          console.log("an error occurred");
        });
    };

  const submitsignUpFormHandler = async (values: Values) => {
    try {
      console.log("values", values);
      const { data } = await axios.post(
        `${process.env.REACT_APP_TODO_API}/auth/signup`,
        values
      );
      setItem("token", data);
      history.push("/dashboard");
    }
    catch (err) {
      console.log("an error occurred", err);
    }
  }

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
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  {" "}
                  Sign up with Google
                </button>
              )}
              buttonText="Sign Up with Google"
              onSuccess={handleSignUp}
              onFailure={handleSignUp}
              cookiePolicy={"single_host_origin"}
            />
          </div>

          <div className="email_signup">
            <h4>
              <span>or Sign up with email</span>
            </h4>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                agreement: false,
              }}
              validationSchema={signUpValidationSchema}
              onSubmit={async (
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                setSubmitting(true);
                await submitsignUpFormHandler(values);
                setSubmitting(false);
              }}
            >
              <Form>
                <MySignUpForm clickHandler={dashboardClickHandler} />
              </Form>
            </Formik>

            <div className="login_info">
              <span>
                Already have an account&nbsp;
                <a href="#" onClick={signInClickHandler}>
                  Sign in
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="right"></div>
    </div>
  );
};


export const MySignUpForm = ({ clickHandler }: IMySignUpFormProps) => {

  const {
         values,
         handleChange,
         handleBlur,
         touched,
         errors,
         isValid,
         dirty
  } = useFormikContext<Values>();
  
  // console.log("values", values);
  // console.log("errors", errors);
  // console.log("isvalid", isValid);

  return (
                <>
                  <Input
                    label="First Name*"
                    type="text"
                    id="firstname"
                    placeholder="first name"
                    cssclass="form_group"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstname}
                  />
                  {touched.firstname && errors.firstname ? (
                    <div className="error">{errors.firstname}</div>
                  ) : null}

                  <Input
                    label="Last Name*"
                    type="text"
                    id="lastname"
                    placeholder="last name"
                    cssclass="form_group"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                  />
                  {touched.lastname && errors.lastname ? (
                    <div className="error">{errors.lastname}</div>
                  ) : null}

                  <Input
                    label="Email*"
                    type="text"
                    id="email"
                    placeholder="email"
                    cssclass="form_group"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {touched.email && errors.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}

                  <Input
                    label="Password*"
                    type="password"
                    id="password"
                    placeholder="password"
                    cssclass="form_group"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {touched.password && errors.password ? (
                    <div className="error">{errors.password}</div>
                  ) : null}

                  <div className="t_and_c">
                    <div>
                      <input
                        id="agreement"
                        type="checkbox"
                        checked={values.agreement}
                        onChange={handleChange}
                        
                      />
                      <label htmlFor="t_and_c">
                        I agree to the <a href="#">terms and conditions</a>
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    // clickHandler={clickHandler}
                    className="submit_btn"
                    disabled={!(isValid && dirty)}
                  >
                    Login
                  </Button>
               </>
  )
}

export default SignupPage;
