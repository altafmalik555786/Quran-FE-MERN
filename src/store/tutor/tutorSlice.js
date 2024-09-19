import { createSlice } from '@reduxjs/toolkit';
import { registerTutor } from './tutorAction';

const initialState = {
  tutor: null,
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

const studentSlice = createSlice({
  name: 'tutor',
  initialState,
  reducers: {
    // Add synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerTutor.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerTutor.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.student = action.payload;
      })
      .addCase(registerTutor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
   
  },
});

export default studentSlice.reducer;
