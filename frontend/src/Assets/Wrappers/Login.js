import styled from 'styled-components';

const Wrapper = styled.div`
  .loginup {
    padding: 10px;
  }
  .container {
    max-width: 992px;
    margin: auto;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .justify-content-between {
    justify-content: space-between;
  }
  .content-left {
    max-width: 500px;
    margin: auto;
  }
  .content-left h1 {
    font-size: 40px;
    color: #1877f2;
    margin-bottom: 20px;
    font-weight: 600;
    text-shadow: -3px 3px 4px rgb(255, 255, 255),
      3px 3px 4px rgba(230, 230, 230, 0.96);
  }
  .content-left h2 {
    font-size: 20px;
    line-height: 32px;
    font-weight: 300;
    margin-bottom: 40px;
  }
  .content-right {
    max-width: 450px;
    margin: auto;
    text-align: center;
  }
  .content-right form {
    width: 396px;
    height: 360px;
    align-items: center;
    margin-top: 100px;
    box-shadow: -5px -5px 10px rgb(255, 255, 255),
      5px 5px 10px rgba(230, 230, 230, 0.96);
    padding: 16px;
    margin-bottom: 30px;
    border-radius: 8px;
    background: #f8f8f8;
  }
  .content-right form input {
    width: 100%;
    height: 52px;
    background: #f8f8f8;
    padding: 0 15px;
    font-size: 17px;
    border-radius: 6px;
    border: 1px solid #dddfe2;
    margin-bottom: 15px;
  }
  ::placeholder {
    color: #9094b6;
  }
  .content-right form input:focus {
    border: 1px solid #1877f2;
    box-shadow: 0 0px 2px #1877f2;
  }
  .btn {
    display: inline-block;

    padding: 0 17px;
    border-radius: 6px;
    font-size: 17px;
    line-height: 48px;
    padding: 0 16px;
    background: #1877f2;
    color: #fff;
    margin-bottom: 20px;
    border-style: none;
    text-transform: capitalize;
    box-shadow: -5px -5px 10px rgb(255, 255, 255),
      5px 5px 10px rgba(230, 230, 230, 0.96);
    font-weight: 500;
  }
  .login a {
    display: block;
  }
  .create-btn a {
    display: inline-block;
    padding: 0 17px;
    background: #4cd137;
    transition: 0.3s;
  }
  .create-btn a:hover {
    background: #44bd32;
  }
  .login .btn:active {
    background-color: #f8f8f8;
    color: #1877f2;
  }
  .forget a {
    font-size: 14px;
    line-height: 19px;
    color: #1877f2;
  }
  .forget a:hover,
  .content-right p a:hover {
    text-decoration: underline;
  }
  .content-right p a {
    color: #1c1e21;
    font-weight: 600;
  }
  .line {
    align-items: center;
    border-bottom: 1px solid #dadbe1;
    display: flex;
    margin: 20px 16px;
    text-align: center;
  }
`;

export default Wrapper;
