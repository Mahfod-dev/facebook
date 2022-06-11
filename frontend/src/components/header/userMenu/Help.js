import React from 'react';
import uuid from 'react-uuid';
import { helper } from '../../../data/submenu';

const Help = () => {
  const settingMenu = helper.map((setValue) => {
    return (
      <div key={uuid()} className="mmenu_item hover3">
        <div className="small_circle">{setValue.icon}</div>
        <span>{setValue.title}</span>
      </div>
    );
  });

  return <>{settingMenu}</>;
};
export default Help;
