import PropTypes from 'prop-types';
// import css from './Profile.module.css';
import {
  ProfileBox,
  ProfileDesc,
  ProfileAvatar,
  ProfileName,
  ProfileInfo,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from 'components/profile/Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileBox>
      <ProfileDesc>
        <ProfileAvatar src={avatar} alt={username} />
        <ProfileName>{username}</ProfileName>
        <ProfileInfo>@{tag}</ProfileInfo>
        <ProfileInfo>{location}</ProfileInfo>
      </ProfileDesc>

      <StatsList>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({}),
};
