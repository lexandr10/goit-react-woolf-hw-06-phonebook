import { useEffect, useState } from 'react';
import Form from './Form/Form';
import ListContact from './ListContact/ListContact';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  createContact,
  deleteContact,
} from 'store/contactsSlice/contactsSlice';
import { resultFilter } from 'store/filterSlice/filterSlice';
import { getContact, getFilter } from 'store/selectors/selectors';
const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Form></Form>

      <Filter></Filter>
      <ListContact></ListContact>
    </div>
  );
};
export default App;
