import * as Yup from 'yup';

export const todoValidationSchema = Yup.object({
    name: Yup.string()
        .required('Required')
        .min(5, 'must be 5 characters or more'),
    complete: Yup.bool().default(false)
});


export const logInValidationSchema = Yup.object({
  email: Yup.string()
    .required("Required")
    .min(3, "must be at least three characters")
    .email("must be a valid email"),
    password: Yup.string().min(6, "password must be at least 6 characters long")
              .required("password is required")
              ,
});

export const signUpValidationSchema = Yup.object({
  firstname: Yup.string()
    .required("Required")
    .min(2, "must be at least three characters")
    .max(100, "must not exceed 100 characters"),
  lastname: Yup.string()
    .required("Required")
    .min(2, "must be at least three characters")
    .max(100, "must not exceed 100 characters"),
  email: Yup.string()
    .required("Required")
    .min(3, "must be at least three characters")
    .email("must be a valid email"),
  password: Yup.string()
    .min(6, "password must be at least 6 characters long")
        .required("password is required"),
    agreement: Yup.bool()
               .required("terms and conditions required")
});

