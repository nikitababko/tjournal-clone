import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';

import { RegisterFormSchema } from '../../../utils/validations';
import FormField from '../../FormField';

interface LoginFormProps {
  onOpenRegister: () => void;
}

const RegisterForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  interface IFormInputs {
    email: string;
    password: string;
  }

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <div>
      <FormProvider {...form}>
        <FormField name="fullname" label="Fullname" />
        <FormField name="email" label="Email" />
        <FormField name="password" label="Password" />

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="d-flex align-center justify-between">
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              style={{ marginTop: '20px' }}
              color="primary"
              variant="contained"
            >
              Register
            </Button>

            <Button
              onClick={onOpenRegister}
              className="ml-10"
              style={{ marginTop: '20px' }}
              color="primary"
              variant="text"
            >
              Login
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterForm;
