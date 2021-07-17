import FriendCard from './FriendCard'
import PropTypes from 'prop-types'
import './FriendList.scss'

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendCard
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape),
}
