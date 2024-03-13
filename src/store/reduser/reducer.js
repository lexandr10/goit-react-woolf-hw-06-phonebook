import { contactsReducer } from 'store/contactsSlice/contactsSlice';
import { filterReducer } from 'store/filterSlice/filterSlice';
import { userReducer } from 'store/userSlice/userSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'contacts',
  storage,
};
const persistReduced = persistReducer(persistConfig, contactsReducer);
export const reducer = {
  contacts: persistReduced,
  filter: filterReducer,
  user: userReducer,
};
