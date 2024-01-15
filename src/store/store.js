import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};

export const store = configureStore({ reducer });
