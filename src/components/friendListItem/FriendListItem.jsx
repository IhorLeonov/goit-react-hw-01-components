import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendItem}>
      <span className={css.friendStatus}></span>
      <img className={css.friendAva} src={avatar} alt={name} width="48" />
      <p className={css.friendName}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

// В зависимости от пропа isOnline, должен меняться цвет фона span.status.
// Это можно сделать через разный CSS-класс или Styled Components.
