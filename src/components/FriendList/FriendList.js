import PropTypes, { shape } from 'prop-types'; 
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (
      <ul className={s.friend}>
        {friends.map(friend => (
          <div key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </div>
        ))}
      </ul>
    );
};
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape( {
        id: PropTypes.string.isRequired,
    }).isRequired,
    ),
};
export default FriendList;