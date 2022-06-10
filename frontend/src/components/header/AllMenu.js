import { create } from '../../data/allMenu';
import AllMenuGroup from './AllMenuGroup';

const AllMenu = () => {
  return (
    <div className="all_menu">
      <div className="all_menu_header">Menu</div>
      <div className="all_menu_wrap scrollbar">
        <div className="all_left">
          <div className="all_menu_search">
            <i className="amm_s_ic"></i>
            <input type="text" placeholder="Search Menu" />
          </div>
          <AllMenuGroup title={'Social'} firstSlice={0} secondSlice={6} />
          <AllMenuGroup
            title={'Entertainment'}
            firstSlice={6}
            secondSlice={9}
          />
          <AllMenuGroup title={'Shopping'} firstSlice={9} secondSlice={11} />
          <AllMenuGroup title={'Personal'} firstSlice={11} secondSlice={15} />
          <AllMenuGroup
            title={'Professional'}
            firstSlice={15}
            secondSlice={17}
          />
          <AllMenuGroup
            title={'Community Ressources'}
            firstSlice={17}
            secondSlice={21}
          />
          <AllMenuGroup
            title={'More from Meta'}
            firstSlice={21}
            secondSlice={23}
          />
        </div>

        <div className="all_right">
          <div className="all_right_header">Create</div>
          {create.map((item, index) => (
            <div key={index} className="all_right_item hover1">
              <div className="all_right_circle">
                <i className={item.icon}></i>
              </div>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllMenu;
