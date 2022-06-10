import { useRef, useEffect } from 'react';
import useClickOutside from '../../helpers/clickOutside';

import { Return, Search } from '../../svg';

const SearchMenu = ({ color, onClick, isModal }) => {
  const input = useRef(null);
  const element = useRef(null);
  useClickOutside(element, () => {
    element.current.style.display = 'none';
  });

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <div className="header_left search_area scrollbar" ref={element}>
      <div className="search_wrap">
        <div className="header_logo">
          <div className="circle hover" onClick={onClick}>
            <Return />
          </div>
        </div>
        <div className="search">
          <div>{!isModal && <Search color={color} />}</div>
          <input type="text" placeholder="Search Facebook" ref={input} />
        </div>
      </div>
      <div className="search_history_header">
        <span>Recent searches</span>
        <span>Edit</span>
      </div>
      <div className="search_history"></div>
      <div className="search_results scrollbar"></div>
    </div>
  );
};
export default SearchMenu;
