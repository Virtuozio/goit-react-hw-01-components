import PropTypes from 'prop-types';
import css from './FriendList.module.css';
export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span className={css.status}>{isOnline}</span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  friends: PropTypes.array,
};
