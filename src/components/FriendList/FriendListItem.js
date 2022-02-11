import PropTypes from 'prop-types'; 
import s from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <li className={s.item}>
            <span style={{background: isOnline ? 'green' : 'red'}} className={s.status}>{isOnline}</span>
        <img className={s.avatar} src={avatar} alt="User avatar"  />
        <p className={s.name}>{name}</p>
      </li>
    );
};

FriendListItem.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;