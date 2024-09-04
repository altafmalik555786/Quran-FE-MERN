import { combineReducers } from "@reduxjs/toolkit";
import studentReducer from "../store/student/studentSlice";
import authSlice from "../store/auth/authSlice";

const rootReducer = combineReducers({
  student: studentReducer,
  auth: authSlice,
});

export default rootReducer;
