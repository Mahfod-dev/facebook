import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { storeUser } from '../../features/userSlice';
import { toogleSignin } from '../../features/userSlice';
import {
  Logo,
  Search,
  HomeActive,
  Friends,
  Watch,
  Market,
  Gaming,
  Menu,
  Messenger,
  Notifications,
  ArrowDown,
} from '../../svg';
import SearchMenu from './SearchMenu';

const color = '#65676b';
const Header = () => {
  const { user, isModal } = useSelector(storeUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toogleSignin());
  };

  return (
    <header>
      <div className="header_left">
        <Link to="/" className="header_logo">
          <div className="circle">
            <Logo />
          </div>
        </Link>
        <div className="search search1" onClick={handleClick}>
          <Search color={color} />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hide_input"
          />
        </div>
      </div>
      {isModal && <SearchMenu onClick={handleClick} isModal={isModal} />}
      <div className="header_middle">
        <Link to="/" className="middle_icon active">
          <HomeActive />
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Friends color={color} />
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Watch color={color} />
          <div className="middle_notification">9+</div>
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Market color={color} />
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Gaming color={color} />
        </Link>
      </div>
      <div className="header_right">
        <Link className="profile_link hover1" to="/profile">
          <img src={user?.picture} alt="profile" />
          <span>{user?.first_name}</span>
        </Link>
        <div className="circle_icon">
          <Menu />
        </div>
        <div className="circle_icon">
          <Messenger />
        </div>
        <div className="circle_icon">
          <Notifications />
          <div className="right_notification">5</div>
        </div>
        <div className="circle_icon">
          <ArrowDown />
        </div>
      </div>
    </header>
  );
};
export default Header;
