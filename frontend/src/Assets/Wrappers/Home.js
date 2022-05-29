import styled from 'styled-components';

const Wrapper = styled.div`
  /* width: 300px;
  height: 100px;
  place-items: center;
  background: var(--bg-secondary); */
  background: red;
  .wrapper {
    background: yellow;
    /* width: 500px;
    height: 100px; */
    background: red;
    border-radius: 15px;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  }

  .wrapper .title {
    font-size: 35px;
    font-weight: 600;
    text-align: left;
    color: #fff;
    user-select: none;
    border-radius: 15px 15px 0 0;
    background: #2b519a;
    padding: 32px;
  }

  .title p {
    font-size: 18px;
  }

  .wrapper form {
    padding: 10px 30px 50px 30px;
  }

  .wrapper form .field {
    /* height: 50px;
    width: 100%; */
    margin-top: 20px;
    position: relative;
  }

  .wrapper form .field input {
    height: 100%;
    width: 100%;
    outline: none;
    font-size: 17px;
    padding-left: 20px;
    border: 1px solid lightgray;
    transition: all 0.3s ease;
  }

  .wrapper form .field input:focus,
  form .field input:valid {
    border-color: #4158d0;
  }

  .wrapper form .field label {
    /* position: absolute;
    top: 50%;
    left: 20px; */
    color: #999999;
    font-weight: 400;
    font-size: 17px;
    pointer-events: none;
    transform: translateY(-50%);
    transition: all 0.3s ease;
  }

  form .field input:focus ~ label,
  form .field input:valid ~ label {
    top: 0%;
    font-size: 16px;
    color: #4158d0;
    background: #fff;
    transform: translateY(-50%);
  }

  form .content {
    display: flex;
    width: 100%;
    height: 50px;
    font-size: 16px;
    align-items: center;
    justify-content: space-around;
  }

  form .content .checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form .content input {
    width: 15px;
    height: 15px;
  }

  form .content label {
    color: #262626;
    user-select: none;
    padding-left: 5px;
  }

  form .content .pass-link {
    color: '';
  }

  form .field input[type='submit'] {
    color: #fff;
    border: none;
    padding-left: 0;
    margin-top: -10px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    background: #2b519a;
    transition: all 0.3s ease;
  }

  form .field input[type='submit']:active {
    transform: scale(0.95);
  }

  form .signup-link {
    color: #262626;
    margin-top: 20px;
    text-align: center;
  }

  @media screen and (max-width: 700px) {
    height: 50%;
  }
`;

export default Wrapper;
