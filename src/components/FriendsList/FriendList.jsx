import {FriendItem, FriendList, Status} from "./FriendList.styled";
import PropTypes from "prop-types";

export const Friend = ({friends}) => {
  return (
    <FriendList>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          <Status isActive={friend.isOnline}></Status>
          <img src={friend.avatar} alt="User avatar" width="48"/>
          <p>{friend.name}</p>
        </FriendItem>
      ))}
    </FriendList>
  )
}

Friend.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired
}
