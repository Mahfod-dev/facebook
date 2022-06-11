import Header from '../../components/header';
import LeftHome from '../../components/home/left';
import { useSelector } from 'react-redux';
import { storeUser } from '../../features/userSlice';

export default function Home() {
  const { user } = useSelector(storeUser);
  return (
    <>
      <Header />
      <LeftHome user={user} />
    </>
  );
}
