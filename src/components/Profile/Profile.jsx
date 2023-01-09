import PropTypes from 'prop-types';
import styles from './Profile.module.css'

export function Profile({ user: { username, tag, location, avatar, stats: { followers, views, likes } } }) {
    return <div className={styles.profile} key={username}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt={username}
      className={styles.avatar}
    />
    <p className={styles.name}>{username}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li className={styles.item}>
      <span className={styles.label}>Followers</span><br/>
      <span className={styles.quantity}>{followers}</span>
    </li>
    <li className={styles.item}>
      <span className={styles.label}>Views</span><br/>
      <span className={styles.quantity}>{views}</span>
    </li>
    <li className={styles.item}>
      <span className={styles.label}>Likes</span><br/>
      <span className={styles.quantity}>{likes}</span>
    </li>
  </ul>
</div>
}

Profile.prototype = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
}