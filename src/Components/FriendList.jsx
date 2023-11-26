import friends from '../friends.json';
import FriendsListCss from './FriendList.module.css'
const FriendList = () => {

  return (
    <ul className={FriendsListCss.friendList}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          name={friend.name}
          avatar={friend.avatar}
        />
      ))}
    </ul>
  );
};

const FriendListItem = ({ isOnline, name, avatar }) => {
   const statusText = isOnline ? 'Online' : 'Offline';
  const statusClass = isOnline ? FriendsListCss.true : FriendsListCss.false;
  return (
    <li className={FriendsListCss.item}>
       <span className={`${FriendsListCss.status} ${statusClass}`}>{statusText}</span>
      <img className={FriendsListCss.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={FriendsListCss.name}>{name}</p>
    </li>
  );
};
export default FriendList