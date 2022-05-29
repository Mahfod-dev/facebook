import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import Wrapper from '../../Assets/Wrappers/Login';

const Login = () => {
  return (
    <Wrapper>
      <div className="loginup">
        <div className="container">
          <div className="row justify-content-between">
            <div className="content-left">
              <h1>facebook</h1>
              <h2>
                Facebook helps you connect and share with the people in your
                life.
              </h2>
            </div>

            <div className="content-right">
              <Formik>
                {(formik) => (
                  <Form>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Email address or phone number"
                      />
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="password" />
                    </div>

                    <div className="login">
                      <button className="btn">log in</button>
                    </div>
                    <div className="forget">
                      <Link to="/forgot">Forgotten account?</Link>
                    </div>
                    <div className="line"></div>
                    <div className="create-btn">
                      <Link to="/" className="btn">
                        create new account
                      </Link>
                    </div>
                  </Form>
                )}
              </Formik>
              <p>
                <Link to="/">Create a page</Link> for a celebrity, band or
                business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
