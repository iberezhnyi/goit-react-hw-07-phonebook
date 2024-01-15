import { createSlice } from '@reduxjs/toolkit';
// import { selectContacts } from 'store/contacts/contactsSlice';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (_, action) => action.payload,
  },
});

export const filterReducer = filterSlice.reducer;

export const { setFilter } = filterSlice.actions;

// const selector = createSelector(selectFilter, selectContacts);

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
