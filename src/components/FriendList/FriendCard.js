import PropTypes from 'prop-types'
import './FriendList.scss'

const FriendCard = ({ isOnline, avatar, name }) => {
  return (
    <>
      <li className="item-friend">
        <span className={`status ${isOnline ? 'green' : 'red'}`} />
        <img
          className="avatar"
          src={avatar}
          alt={`card by ${name}`}
          width="48"
        />
        <p className="name">{name}</p>
      </li>
    </>
  )
}

FriendCard.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default FriendCard
