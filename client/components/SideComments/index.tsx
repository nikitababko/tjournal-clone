import React from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';
import clsx from 'clsx';

import CommentItem from './CommentItem';
import data from '../../data';

import styles from './SideComments.module.scss';

export const SideComments = () => {
  const [visible, setVisible] = React.useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Comments <ArrowRightIcon />
      </h3>
      {visible &&
        data.comments.popular.map((obj) => (
          <CommentItem key={obj.id} {...obj} />
        ))}
    </div>
  );
};
