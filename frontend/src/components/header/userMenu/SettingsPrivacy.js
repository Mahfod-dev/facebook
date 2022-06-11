import SettingPrivacy from './SettingPrivacy';

const SettingsPrivacy = ({ submenu }) => {
  return (
    <div className="absolute_wrap">
      <div className="absolute_wrap_header">
        <div className="circle" onClick={() => submenu(0)}>
          <i className="arrow_back_icon"></i>
        </div>
        Settings & privacy
      </div>
      <SettingPrivacy />
    </div>
  );
};
export default SettingsPrivacy;
