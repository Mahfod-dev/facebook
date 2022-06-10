import useClickOutside from '../../helpers/clickOutside';
import { useRef } from 'react';

export default function Profile() {
  const element = useRef(null);

  useClickOutside(element, () => {
    element.current.style.display = 'none';
  });

  return (
    <div className="card" ref={element}>
      Profile
    </div>
  );
}
