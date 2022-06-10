import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';
import Cookies from 'js-cookie';

const user = Cookies.get('user');

const initialState = {
  user: user ? JSON.parse(user) : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  isModal: false,
};

export const register = createAsyncThunk(
  '/user/register',
  async (user, thunkAPI) => {
    try {
      return await userService.registerUser(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(thunkAPI.rejectWithValue(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk('/user/login', async (user, thunkAPI) => {
  try {
    return await userService.loginUser(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(thunkAPI.rejectWithValue(message));
    return thunkAPI.rejectWithValue(message);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleModal(state) {
      state.isModal = !state.isModal;
    },
    reset(state) {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
      state.isModal = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload.message;
      state.user = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload.message;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    });
  },
});

export const storeUser = (state) => state.user;

export const { toggleModal } = userSlice.actions;
export default userSlice.reducer;
