import React from 'react';
import uuid from 'react-uuid';
import { setting } from '../../../data/settings';

const SettingPrivacy = () => {
  const settingMenu = setting.map((setValue) => {
    return (
      <div key={uuid()} className="mmenu_item hover3">
        <div className="small_circle">{setValue.icon}</div>
        <span>{setValue.title}</span>
      </div>
    );
  });

  return <>{settingMenu}</>;
};
export default SettingPrivacy;
