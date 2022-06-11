import Help from './Help';

const HelpSupport = ({ submenu }) => {
  return (
    <div className="absolute_wrap">
      <div className="absolute_wrap_header">
        <div
          className="circle hover1"
          onClick={() => {
            submenu(0);
          }}
        >
          <i className="arrow_back_icon"></i>
        </div>
        Help & Support
      </div>
      <Help />
    </div>
  );
};
export default HelpSupport;
