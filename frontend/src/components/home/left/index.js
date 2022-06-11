import LeftLink from './LeftLink';
import './style.css';
import { left } from '../../../data/home';
import { Link } from 'react-router-dom';
import { User } from '../../../svg';

const color = '#14A2FB';
const LeftHome = ({ user }) => {
  return (
    <div className="left_home">
      <Link to="/profile" className="left_link hover1">
        {user?.profile === null ? (
          <img src={user?.picture} alt="profile" />
        ) : (
          <div className="circle_icon">
            <User color={color} />
            <span>
              {user?.first_name} {user?.last_name}
            </span>
          </div>
        )}
      </Link>
      {left.slice(0, 8).map((link, i) => (
        <LeftLink
          key={i}
          img={link.img}
          text={link.text}
          notification={link.notification}
        />
      ))}
    </div>
  );
};
export default LeftHome;
