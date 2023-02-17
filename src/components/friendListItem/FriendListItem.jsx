// import PropTypes from 'prop-types';
// import css from './FriendListItem.module.css';

export const FriendListItem = props => {
  return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src="" alt="User avatar" width="48" />
      <p className="name"></p>
    </li>
  );
};

// FriendListItem.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
// };

// В зависимости от пропа isOnline, должен меняться цвет фона span.status.
// Это можно сделать через разный CSS-класс или Styled Components.
