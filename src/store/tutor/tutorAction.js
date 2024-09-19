// src/features/student/studentActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import baseUrl from '../../API/axios'; 

export const registerTutor = createAsyncThunk(
  'tutor/registerTutor',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await baseUrl.post('tutor/register', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchStudent = createAsyncThunk(
  'student/fetchStudent',
  async (studentId, { rejectWithValue }) => {
    try {
      const response = await baseUrl.get(`/students/${studentId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateStudentProfile = createAsyncThunk(
  'student/updateStudentProfile',
  async ({ studentId, formData }, { rejectWithValue }) => {
    try {
      const response = await baseUrl.put(`/students/${studentId}`, formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
