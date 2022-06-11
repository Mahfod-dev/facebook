import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SettingsPrivacy from './SettingsPrivacy';
import DisplayAccessibilty from './DisplayAccessibilty';
import useClickOutside from '../../../helpers/clickOutside';
import HelpSupport from './HelpSupport';
import { User } from '../../../svg';

const color = '#65676b';
const UserMenu = ({ user }) => {
  const [showSubMenu, setShowSubmenu] = useState(0);

  const closeUserMenu = useRef(null);

  useClickOutside(closeUserMenu, () => {
    closeUserMenu.current.style.display = 'none';
  });
  console.log(showSubMenu);
  return (
    <div className="mmenu" ref={closeUserMenu}>
      {showSubMenu === 0 && (
        <div>
          <Link to="/profile" className="mmenu_header hover3">
            {user?.profile === null ? (
              <img src={user?.picture} alt="profile" />
            ) : (
              <div className="circle_icon">
                <User color={color} />
              </div>
            )}
            <div className="mmenu_col">
              <span>
                {user?.first_name}
                {user?.last_name}
              </span>
              <span>See your profile</span>
            </div>
          </Link>
          <div className="mmenu_splitter"></div>
          <div className="mmenu_main hover3">
            <div className="small_circle">
              <i className="report_filled_icon"></i>
            </div>
            <div className="mmenu_col">
              <div className="mmenu_span1">Give feedback</div>
              <div className="mmenu_span2">Help us improve facebook</div>
            </div>
          </div>
          <div className="mmenu_splitter"></div>
          <div className="mmenu_item hover3" onClick={() => setShowSubmenu(1)}>
            <div className="small_circle">
              <i className="settings_filled_icon margin"></i>
            </div>
            <span>Settings & privacy</span>
            <div className="rArrow">
              <i className="right_icon margin"></i>
            </div>
          </div>
          <div className="mmenu_item hover3" onClick={() => setShowSubmenu(2)}>
            <div className="small_circle">
              <i className="help_filled_icon margin"></i>
            </div>
            <span>Help & support</span>
            <div className="rArrow">
              <i className="right_icon margin"></i>
            </div>
          </div>
          <div className="mmenu_item hover3" onClick={() => setShowSubmenu(3)}>
            <div className="small_circle">
              <i className="dark_filled_icon margin"></i>
            </div>
            <span>Display & Accessibility</span>
            <div className="rArrow">
              <i className="right_icon margin"></i>
            </div>
          </div>
          <div className="mmenu_item hover3">
            <div className="small_circle">
              <i className="logout_filled_icon margin"></i>
            </div>
            <span>Logout</span>
          </div>
        </div>
      )}
      {showSubMenu === 1 && <SettingsPrivacy submenu={setShowSubmenu} />}
      {showSubMenu === 2 && <HelpSupport submenu={setShowSubmenu} />}
      {showSubMenu === 3 && <DisplayAccessibilty submenu={setShowSubmenu} />}
    </div>
  );
};
export default UserMenu;
