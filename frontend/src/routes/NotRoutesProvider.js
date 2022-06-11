import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { storeUser } from '../features/userSlice';

const NotRoutesProvider = () => {
  const { user } = useSelector(storeUser);

  return user ? <Navigate to="/login" /> : <Outlet />;
};
export default NotRoutesProvider;
