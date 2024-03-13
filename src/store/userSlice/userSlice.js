import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { name: '', number: '' },
  reducers: {
    resultUser: (state, { payload }) => {
      switch (payload.name) {
        case 'name':
          state.name = payload.value;
          break;
        case 'number':
          state.number = payload.value;
          break;
        default:
          return;
      }
    },
    resetUser: (state, { payload }) => {
      state.name = '';
      state.number = '';
    },
  },
});
export const userReducer = userSlice.reducer;
export const { resultUser, resetUser } = userSlice.actions;
