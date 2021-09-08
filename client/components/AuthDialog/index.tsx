import React from 'react';
import {
  DialogContent,
  DialogContentText,
  Dialog,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import MainForm from './forms/Main';
import LoginForm from './forms/Login';
import RegisterForm from './forms/Register';

import styles from './AuthDialog.module.scss';

interface AuthDialogProps {
  onClose: () => void;
  visible: boolean;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
  const [formType, setFormType] = React.useState<'main' | 'login' | 'register'>(
    'main'
  );

  return (
    <Dialog open={visible} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {formType === 'main' ? (
                'Login'
              ) : (
                <p
                  onClick={() => setFormType('main')}
                  className={styles.backTitle}
                >
                  <ArrowBackIcon /> Login with email
                </p>
              )}
            </Typography>

            {formType === 'main' && (
              <MainForm onOpenLogin={() => setFormType('login')} />
            )}

            {formType === 'login' && (
              <LoginForm onOpenRegister={() => setFormType('register')} />
            )}

            {formType === 'register' && (
              <RegisterForm onOpenRegister={() => setFormType('login')} />
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
