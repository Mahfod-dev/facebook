import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { storeUser } from '../../features/userSlice';
import { register } from '../../features/userSlice';

import { toast } from 'react-toastify';
import { DotLoader } from 'react-spinners';
import { Form, Formik } from 'formik';
import { registerValidation } from './YupForm';
import Cookies from 'js-cookie';

import RegisterInput from '../inputs/registerInput';
import DateOfBirthSelect from './DateOfBirthSelect';
import GenderSelect from './GenderSelect';
import { toggleModal } from '../../features/userSlice';

export default function RegisterForm() {
  // Setup info user
  const userInfos = {
    first_name: 'karim',
    last_name: 'belha',
    email: 'xifag23022@dilanfa.com',
    password: '1234567',
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: 'male',
  };
  const [userData, setUserData] = useState(userInfos);
  const {
    first_name,
    last_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  } = userData;

  const { user, isLoading, isError, isSuccess, message } =
    useSelector(storeUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && user) {
      setTimeout(() => {
        toast.success(message);
        navigate('/');
      });
    }
    Cookies.set('user', JSON.stringify(user));
  }, [user, isSuccess, isError, navigate, message]);

  //Register User
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleClick = () => {
    dispatch(toggleModal());
  };

  //Date Form
  const yearTemp = new Date().getFullYear();
  const years = Array.from(new Array(108), (val, index) => yearTemp - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate();
  };
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);

  //State
  const [dateError, setDateError] = useState('');
  const [genderError, setGenderError] = useState('');

  //Form fetch data
  const registerSubmit = () => {
    const { message, ...data } = userData;
    //left message data
    dispatch(register(data));
  };

  return (
    <div className="blur">
      <div className="register">
        <div className="register_header">
          <i className="exit_icon" onClick={handleClick}></i>
          <span>Sign Up</span>
          <span>it's quick and easy</span>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            first_name,
            last_name,
            email,
            password,
            bYear,
            bMonth,
            bDay,
            gender,
          }}
          validationSchema={registerValidation}
          onSubmit={() => {
            let current_date = new Date();
            let picked_date = new Date(bYear, bMonth - 1, bDay);
            let atleast14 = new Date(1970 + 14, 0, 1);
            let noMoreThan70 = new Date(1970 + 70, 0, 1);
            if (current_date - picked_date < atleast14) {
              setDateError(
                'it looks like you have entered the wrong info.Please make sure that you use your real date of birth.'
              );
            } else if (current_date - picked_date > noMoreThan70) {
              setDateError(
                'it looks like you(ve enetered the wrong info.Please make sure that you use your real date of birth.'
              );
            } else if (gender === '') {
              setDateError('');
              setGenderError(
                'Please choose a gender. You can change who can see this later.'
              );
            } else {
              setDateError('');
              setGenderError('');
              registerSubmit();
            }
          }}
        >
          {(formik) => (
            <Form className="register_form">
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder="First name"
                  name="first_name"
                  onChange={handleRegisterChange}
                />
                <RegisterInput
                  type="text"
                  placeholder="Surname"
                  name="last_name"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder="Mobile number or email address"
                  name="email"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="password"
                  placeholder="New password"
                  name="password"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Date of birth <i className="info_icon"></i>
                </div>
                <DateOfBirthSelect
                  bDay={bDay}
                  bMonth={bMonth}
                  bYear={bYear}
                  days={days}
                  months={months}
                  years={years}
                  handleRegisterChange={handleRegisterChange}
                  dateError={dateError}
                />
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Gender <i className="info_icon"></i>
                </div>

                <GenderSelect
                  handleRegisterChange={handleRegisterChange}
                  genderError={genderError}
                />
              </div>
              <div className="reg_infos">
                By clicking Sign Up, you agree to our{' '}
                <span>Terms, Data Policy &nbsp;</span>
                and <span>Cookie Policy.</span> You may receive SMS
                notifications from us and can opt out at any time.
              </div>
              <div className="reg_btn_wrapper">
                <button type="submit" className="blue_btn open_signup">
                  Sign Up
                </button>
              </div>
              <DotLoader color="#1876f2" loading={isLoading} size={30} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
