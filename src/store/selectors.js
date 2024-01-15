import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => {
  console.log(state.contacts);
  return state.contacts.items;
};
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilter = state => {
  console.log(state.filter);
  return state.filter;
};

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
