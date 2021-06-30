import React from "react";
import { useHistory, Link } from "react-router-dom";
import { signUpValidationSchema } from "../../utils/schema";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import "./style.css";
import { Form, Formik, FormikHelpers, useFormikContext } from "formik";

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
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                agreement: false,
              }}
              validationSchema={signUpValidationSchema}
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
              <Form>
                <MySignUpForm clickHandler={dashboardClickHandler} />
              </Form>
            </Formik>

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
                    cssClass="submit_btn"
                    disabled={!(isValid && dirty)}
                  >
                    Login
                  </Button>
               </>
  )
}

export default SignupPage;
