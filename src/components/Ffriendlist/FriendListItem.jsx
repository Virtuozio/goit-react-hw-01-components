import PropTypes from 'prop-types';
import { Fragment } from 'react';
import css from './FriendList.module.css';
export const FriendListItem = ({ avatar, name, isOnline }) => (
  <Fragment>
    {isOnline ? (
      <span className={css.online}></span>
    ) : (
      <span className={css.offline}></span>
    )}
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </Fragment>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
