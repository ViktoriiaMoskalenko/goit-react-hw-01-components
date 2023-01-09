import PropTypes from 'prop-types';
import styles from './FriendList.module.css'
import { FriendListItem } from './FriendListItem'

export function FriendList({friends}) {
    return (<ul className={styles.friend_list}>
        <FriendListItem friends={ friends } />
</ul>)
}

FriendList.prototype = {
    friends: PropTypes.arrayOf(PropTypes.shape).isRequired
}