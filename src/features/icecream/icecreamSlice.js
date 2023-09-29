import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

const initialState = {
  icecream: 50,
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.icecream -= action.payload ? action.payload : 1
    },
    restocked: (state, action) => {
      state.icecream += action.payload
    }
  },
  // extraReducers: {                    It is not the best approch
  //   ['cake/ordered']: (state) => {
  //     state.icecream--
  //   }
  // }
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, state => {
      state.icecream--
    })
  }
}) 

export default icecreamSlice.reducer;
export const {ordered, restocked} = icecreamSlice.actions