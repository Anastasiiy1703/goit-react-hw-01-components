import user from '../user.json';
import ProfileCss from './Profile.module.css'
const Profile = ({ username, avatar, location, stats, tag }) => {
  return  (
    <>
          <div className={ProfileCss.profile}>
  <div className="description">
    <img
        src={user.avatar}
        alt="User avatar"
        className={ProfileCss.avatar}
    />
    <p className={ProfileCss.name}>{user.username}</p>
    <p className={ProfileCss.tag}>@{user.tag}</p>
    <p className={ProfileCss.location}>{user.location}</p>
  </div>

    <ul className={ProfileCss.stats}>
    <li>
      <span className={ProfileCss.label}>Followers</span>
      <span className={ProfileCss.quantity}>{user.stats.followers}</span>
    </li>
    <li>
      <span className={ProfileCss.label}>Views</span>
      <span className={ProfileCss.quantity}>{user.stats.views}</span>
    </li>
    <li>
      <span className={ProfileCss.label}>Likes</span>
      <span className={ProfileCss.quantity}>{user.stats.likes}</span>
    </li>
  </ul> 
</div>
    </>
  )
}

export default Profile