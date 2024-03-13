import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    resultFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { resultFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
