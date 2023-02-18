import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.profileDesc}>
        <img src={avatar} alt={username} className={css.profileAvatar} />
        <p className={css.profileName}>{username}</p>
        <p className={css.profileInfo}>@{tag}</p>
        <p className={css.profileInfo}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Followers</span>
          <span className={css.statsQuantity}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Views</span>
          <span className={css.statsQuantity}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Likes</span>
          <span className={css.statsQuantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({}),
};
