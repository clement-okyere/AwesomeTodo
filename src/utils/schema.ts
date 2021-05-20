import * as Yup from 'yup';

export const todoValidationSchema = Yup.object({
    name: Yup.string()
        .required('Required')
        .min(5, 'must be 5 characters or more'),
    complete: Yup.bool().default(false)
});

