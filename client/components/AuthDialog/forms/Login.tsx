import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';

import { LoginFormSchema } from '../../../utils/validations';
import FormField from '../../FormField';

interface LoginFormProps {
  onOpenRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  interface IFormInputs {
    email: string;
    password: string;
  }

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="email" label="Email" />
          <FormField name="password" label="Password" />

          <div className="d-flex align-center justify-between">
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              style={{ marginTop: '20px' }}
              color="primary"
              variant="contained"
            >
              Login
            </Button>

            <Button
              onClick={onOpenRegister}
              className="ml-10"
              style={{ marginTop: '20px' }}
              color="primary"
              variant="text"
            >
              Register
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
