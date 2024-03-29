import Link from 'next/link';
import {
  Paper,
  Avatar,
  Typography,
  Button,
  Tabs,
  Tab,
} from '@material-ui/core';
import {
  SettingsOutlined as SettingsIcon,
  TextsmsOutlined as MessageIcon,
} from '@material-ui/icons';

import { Post } from '../../components/Post';
import { MainLayout } from '../../layouts/MainLayout';

export default function Profile() {
  return (
    <MainLayout contentFullWidth hideComments>
      <Paper className="pl-20 pr-20 pt-20 mb-30" elevation={0}>
        <div className="d-flex justify-between">
          <div>
            <Avatar
              style={{ width: 120, height: 120, borderRadius: 6 }}
              src="https://res.cloudinary.com/nikitababko/image/upload/v1617193061/Avatars/sil9mbzs67oannqbcc5y.png"
            />
            <Typography
              style={{ fontWeight: 'bold' }}
              className="mt-10"
              variant="h4"
            >
              Nikita Babko
            </Typography>
          </div>
          <div>
            <Link href="/profile/settings">
              <Button
                style={{
                  height: 42,
                  minWidth: 45,
                  width: 45,
                  marginRight: 10,
                }}
                variant="contained"
              >
                <SettingsIcon />
              </Button>
            </Link>
            <Button
              style={{ height: 42 }}
              variant="contained"
              color="primary"
            >
              <MessageIcon className="mr-10" />
              Написать
            </Button>
          </div>
        </div>
        <div className="d-flex mb-10 mt-10">
          <Typography
            style={{ fontWeight: 'bold', color: '#35AB66' }}
            className="mr-15"
          >
            +208
          </Typography>
          <Typography>2 followers</Typography>
        </div>
        <Typography>On project from 6 Sep 2021</Typography>

        <Tabs
          className="mt-20"
          value={0}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Articles" />
          <Tab label="Commens" />
          <Tab label="Bookmarks" />
        </Tabs>
      </Paper>
      <div className="d-flex align-start">
        <div className="mr-20 flex">
          <Post />
        </div>
        <Paper style={{ width: 300 }} className="p-20 mb-20" elevation={0}>
          <b>Followers</b>
          <div className="d-flex mt-15">
            <Avatar
              className="mr-10"
              src="https://res.cloudinary.com/nikitababko/image/upload/v1617193061/Avatars/sil9mbzs67oannqbcc5y.png"
            />
            <Avatar
              className="mr-10"
              src="https://res.cloudinary.com/nikitababko/image/upload/v1617193061/Avatars/sil9mbzs67oannqbcc5y.png"
            />
          </div>
        </Paper>
      </div>
    </MainLayout>
  );
}
