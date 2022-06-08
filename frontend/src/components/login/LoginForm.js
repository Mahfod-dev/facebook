import { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toogleSignin } from '../../features/userSlice';
import { storeUser } from '../../features/userSlice';
import { loginValidation } from './YupForm';
import LoginInput from '../../components/inputs/loginInput';
import { useState } from 'react';
import { login } from '../../features/userSlice';
import { toast } from 'react-toastify';
import { DotLoader } from 'react-spinners';
import Cookies from 'js-cookie';

//initial state
const loginInfos = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(loginInfos);
  const { email, password } = isLogin;

  const { user, isError, message, isSuccess, isLoading } =
    useSelector(storeUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      toast.success(message);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
    Cookies.set('user', JSON.stringify(user));
  }, [user, isSuccess, message, isError, navigate]);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setIsLogin({ ...isLogin, [name]: value });
  };

  const handleClick = () => {
    dispatch(toogleSignin());
  };

  const handleSubmit = () => {
    dispatch(login(isLogin));
  };

  return (
    <div className="login_wrap">
      <div className="login_1">
        <img src="../../icons/facebook.svg" alt="facebook-logo" />
        <span>
          Facebook helps you connect and share with the people in your life.
        </span>
      </div>
      <div className="login_2">
        <div className="login_2_wrap">
          <Formik
            enableReinitialize
            initialValues={{
              email,
              password,
            }}
            validationSchema={loginValidation}
            onSubmit={() => {
              handleSubmit();
            }}
          >
            {(formik) => (
              <Form>
                <LoginInput
                  type="text"
                  name="email"
                  placeholder="Email address or phone number"
                  onChange={handleLoginChange}
                />
                <LoginInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleLoginChange}
                  bottom
                />
                {isSuccess ? (
                  <DotLoader color="#1876f2" loading={isLoading} size={30} />
                ) : (
                  <button type="submit" className="blue_btn">
                    Log In
                  </button>
                )}
              </Form>
            )}
          </Formik>
          <Link to="/forgot" className="forgot_password">
            Forgotten password?
          </Link>
          <div className="sign_splitter"></div>
          <button className="blue_btn open_signup" onClick={handleClick}>
            Create Account
          </button>
        </div>
        <Link to="/" className="sign_extra">
          <b>Create a Page</b> for a celebrity, brand or business.
        </Link>
      </div>
    </div>
  );
}
