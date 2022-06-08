import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { storeUser } from '../../features/userSlice';
import LoginForm from '../../components/login/LoginForm';
import Footer from '../../components/footer/Footer';
import RegisterForm from '../../components/login/RegisterForm';
import { toogleSignin } from '../../features/userSlice';

export default function Login() {
  const { isModal } = useSelector(storeUser);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.className.includes('blur')) {
      dispatch(toogleSignin());
    }
  };

  return (
    <div className="login" onClick={handleClick}>
      <div className="login_wrapper">
        <LoginForm />
        {isModal && <RegisterForm />}
        <Footer />
      </div>
    </div>
  );
}
