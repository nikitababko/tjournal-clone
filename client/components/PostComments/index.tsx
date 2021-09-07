import React from 'react';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';

import { Comment } from '../../components/Comment';
import AddCommentForm from '../AddCommentForm';
import data from '../../data';

const PostComments: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const comments = data.comments[activeTab === 0 ? 'popular' : 'new'];

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          42 comments
        </Typography>

        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          className="mt-20"
          value={activeTab}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Popular" />
          <Tab label="News" />
        </Tabs>
        <Divider />

        <div className="mb-20" />

        <AddCommentForm />

        {comments.map((obj) => (
          <Comment
            key={obj.id}
            user={obj.user}
            text={obj.text}
            createdAt={obj.createdAt}
          />
        ))}
      </div>
    </Paper>
  );
};

export default PostComments;
