// const createSlice = require('@reduxjs/toolkit').createSlice;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  users: [],
  error: '',
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
   return axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => response.data.map(user => user.id))
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
      state.isLoading = true
    })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false,
        state.users = action.payload,
        state.error = ''
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false,
        state.users = [],
        state.error = action.error.message
      })
  }
})

export default userSlice.reducer;
