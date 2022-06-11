import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { storeUser } from '../features/userSlice';
import Login from '../pages/login';

const ProtectedRoutes = () => {
  const { user } = useSelector(storeUser);

  return user ? <Outlet /> : <Login />;
};
export default ProtectedRoutes;
