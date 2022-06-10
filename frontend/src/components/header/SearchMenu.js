import { useRef, useEffect } from 'react';

import { Return, Search } from '../../svg';

const SearchMenu = ({ color, onClick, isModal }) => {
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);

  const handle = (e) => {
    console.log(e.target);
    console.log(window);
    // if (e.target.className.includes('blur')) {
    //   console.log('heelo');
    //   // dispatch(toogleSignin());
    // }
  };

  return (
    <div className="header_left search_area scrollbar">
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
