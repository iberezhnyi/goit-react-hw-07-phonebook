import { createSlice } from '@reduxjs/toolkit';
import * as contactsThunks from './contactsThunks';
import { FULFILLED, PENDING, REJECTED } from 'store/constants';
import { handleFulfilled, handlePending, handleRejected } from './handlers';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(contactsThunks.fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(contactsThunks.addContact.fulfilled, (state, { payload }) => {
        state.singleContact = payload;
      })
      .addCase(contactsThunks.deleteContact.fulfilled, (state, { payload }) => {
        state.items.filter(el => el.id !== payload);
      })
      .addMatcher(action => action.type.endsWith(FULFILLED), handleFulfilled)
      .addMatcher(action => action.type.endsWith(PENDING), handlePending)
      .addMatcher(action => action.type.endsWith(REJECTED), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: builder => {
//     builder
//       .addCase(contactsThunks.fetchContacts.pending, handlePending)
//       .addCase(contactsThunks.fetchContacts.fulfilled, (state, { payload }) => {
//         state.items = payload;
//         state.isLoading = false;
//       })
//       .addCase(contactsThunks.fetchContacts.rejected, handleRejected)
//       .addCase(contactsThunks.addContact.pending, handlePending)
//       .addCase(contactsThunks.addContact.fulfilled, (state, { payload }) => {
//         state.singleContact = payload;
//         state.isLoading = false;
//       })
//       .addCase(contactsThunks.addContact.rejected, handleRejected)
//       .addCase(contactsThunks.deleteContact.pending, handlePending)
//       .addCase(contactsThunks.deleteContact.fulfilled, (state, { payload }) => {
//         state.items.filter(el => el.id !== payload);
//         state.isLoading = false;
//       })
//       .addCase(contactsThunks.deleteContact.rejected, handleRejected);
//   },
// });
