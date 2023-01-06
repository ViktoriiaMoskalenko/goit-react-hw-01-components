import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import {FriendListIsOnline} from './FriendListIsOnline'

export function FriendListItem({friends}) {
    return (friends.map(({ avatar, name, isOnline, id }) =>
    <li className={css.item} key = {id}>
            <span className={css.status} style = {{backgroundColor: FriendListIsOnline(isOnline)}}></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{ name }</p>
</li>))
}

FriendListItem.prototype = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}