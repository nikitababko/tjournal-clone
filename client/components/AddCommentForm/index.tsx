import React from 'react';
import { Input, Button } from '@material-ui/core';

import styles from './AddCommentForm.module.scss';

interface AddCommentFormProps {}

const AddCommentForm: React.FC<AddCommentFormProps> = () => {
  const [clicked, setClicked] = React.useState(false);
  const [text, setText] = React.useState('');

  const onAddComment = () => {
    setClicked(false);
    setText('');
  };

  return (
    <div className={styles.form}>
      <Input
        onChange={(e) => setText(e.target.value)}
        value={text}
        onFocus={() => setClicked(true)}
        classes={{ root: styles.fieldRoot }}
        placeholder="Enter your comment..."
        fullWidth
        multiline
        minRows={clicked ? 5 : 1}
      />

      {clicked && (
        <Button
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary"
        >
          Publish
        </Button>
      )}
    </div>
  );
};

export default AddCommentForm;
