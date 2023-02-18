import PropTypes from 'prop-types';
// import css from './FriendListItem.module.css';
import { iconSize } from 'components/constants';
import {
  FriendItem,
  FriendStatus,
  FriendAva,
  FriendName,
} from 'components/friendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAva src={avatar} alt={name} width={iconSize.l} />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
