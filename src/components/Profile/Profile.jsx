import PropTypes from 'prop-types';
import css from './Profile.module.css'

export function Profile({ user: { username, tag, location, avatar, stats: { followers, views, likes } } }) {
    return <div className={css.profile} key={username}>
  <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.item}>
      <span className={css.label}>Followers</span><br/>
      <span className={css.quantity}>{followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Views</span><br/>
      <span className={css.quantity}>{views}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Likes</span><br/>
      <span className={css.quantity}>{likes}</span>
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