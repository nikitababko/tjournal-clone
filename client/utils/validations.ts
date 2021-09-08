import * as yup from 'yup';

export const LoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email is incorrect.')
    .required('Email is required.'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 chars.')
    .required('Password is required.'),
});

export const RegisterFormSchema = yup
  .object()
  .shape({
    fullname: yup.string().required('Fullname is required.'),
  })
  .concat(LoginFormSchema);
