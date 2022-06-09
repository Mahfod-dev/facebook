import { menu, create } from '../../data/allMenu';
import AllMenuItem from './AllMenuItem';

const AllMenuGroup = ({ title, firstSlice, secondSlice }) => {
  return (
    <div className="all_menu_group">
      <div className="all_menu_group_header">{title}</div>
      {menu.slice(firstSlice, secondSlice).map((item, i) => (
        <AllMenuItem
          name={item.name}
          description={item.description}
          icon={item.icon}
          key={i}
        />
      ))}
    </div>
  );
};
export default AllMenuGroup;
