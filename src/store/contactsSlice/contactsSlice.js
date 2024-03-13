import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    createContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
export const { deleteContact, createContact } = contactsSlice.actions;
