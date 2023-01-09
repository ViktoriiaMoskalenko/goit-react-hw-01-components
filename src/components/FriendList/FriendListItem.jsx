import PropTypes from 'prop-types';
import styles from './FriendList.module.css'
import {FriendListIsOnline} from './FriendListIsOnline'

export function FriendListItem({friends}) {
    return (friends.map(({ avatar, name, isOnline, id }) =>
    <li className={styles.item} key = {id}>
            <span className={styles.status} style = {{backgroundColor: FriendListIsOnline(isOnline)}}></span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{ name }</p>
</li>))
}

FriendListItem.prototype = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}