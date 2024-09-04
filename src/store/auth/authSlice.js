// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { registerStudent } from '../student/studentActions';
const initialState = {
  token: null,
  role: null,
  user: null, // Optionally store additional user info
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerStudent.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.user = action.payload.user;
      })
      .addCase(registerStudent.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
