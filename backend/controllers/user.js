import { validateEmail, validateUsername } from '../helpers/validation.js';
import User from '../models/User.js';
import { sendVerificationEmail } from '../helpers/mailer.js';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    if (!validateEmail(email)) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'invalid email address',
      });
    }
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message:
          'This email address already exists,try with a different email address',
      });
    }

    let tempUsername = first_name + last_name;
    let newUsername = await validateUsername(tempUsername);
    const user = await User.create({
      first_name,
      last_name,
      email,
      password,
      username: newUsername,
      bYear,
      bMonth,
      bDay,
      gender,
    });

    const token = user.createJWT({ id: user._id.toString() });

    const url = `${process.env.BASE_URL}/activate/${token}`;
    sendVerificationEmail(user.email, user.first_name, url);

    res.status(StatusCodes.CREATED).json({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      verified: user.verified,
      message: 'Register Success ! please activate your email to start',
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};
export const activateAccount = async (req, res) => {
  const { token } = req.body;
  const user = jwt.verify(token, process.env.TOKEN_SECRET);

  const checkUser = await User.findById(user.id);

  if (checkUser.verified === true) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Email is already activated' });
  } else {
    await User.findByIdAndUpdate(user.id, { verified: true });
    return res.status(StatusCodes.CREATED).json({
      message: 'Account has been activated successfully',
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Email address is not availaible',
      });
    }
    const isMatch = await user.comparePassword(password);
    console.log(isMatch);

    if (!isMatch) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Invalid Credentials',
      });
    }
    const token = user.createJWT({ id: user._id.toString() });

    res.status(StatusCodes.CREATED).json({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      verified: user.verified,
      message: 'Login Success !',
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message,
    });
  }
};
