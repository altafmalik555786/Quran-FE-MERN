import { createSlice } from '@reduxjs/toolkit';
import { registerStudent, fetchStudent, updateStudentProfile } from './studentActions';

const initialState = {
  student: null,
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    // Add synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerStudent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerStudent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.student = action.payload;
      })
      .addCase(registerStudent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchStudent.fulfilled, (state, action) => {
        state.student = action.payload;
      })
      .addCase(updateStudentProfile.fulfilled, (state, action) => {
        state.student = { ...state.student, ...action.payload };
      });
  },
});

export default studentSlice.reducer;
