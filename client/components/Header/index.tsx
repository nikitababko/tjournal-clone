import React from 'react';
import Link from 'next/link';
import { Paper, Button, IconButton, Avatar } from '@material-ui/core';
import {
  SearchOutlined as SearchIcon,
  CreateOutlined as PenIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
  AccountCircleOutlined as UserIcon,
} from '@material-ui/icons';

import { AuthDialog } from '../AuthDialog';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const [authVisible, setAuthVisible] = React.useState(false);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <img
              height={35}
              className="mr-20"
              src="/static/img/logo.svg"
              alt="Logo"
            />
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Search" />
        </div>

        <Link href="/write">
          <Button variant="contained" className={styles.penButton}>
            New entry
          </Button>
        </Link>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        {/* <Link href="/profile/1">
          <a className="d-flex align-center">
            <Avatar
              className={styles.avatar}
              alt="Remy Sharp"
              src="https://res.cloudinary.com/nikitababko/image/upload/v1617193061/Avatars/sil9mbzs67oannqbcc5y.png"
            />
            <ArrowBottom />
          </a>
        </Link> */}

        <div onClick={openAuthDialog} className={styles.loginButton}>
          <UserIcon />
          Login
        </div>
      </div>

      <AuthDialog onClose={closeAuthDialog} visible={authVisible} />
    </Paper>
  );
};
