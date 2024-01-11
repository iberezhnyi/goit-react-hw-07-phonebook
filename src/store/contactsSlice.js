import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      prepare: (name, number) => {
        const newContact = {
          id: nanoid(),
          name,
          number,
        };

        return { payload: newContact };
      },
      reducer: (state, action) => {
        state.push(action.payload);
      },
    },

    deleteContact: (state, action) =>
      state.filter(el => el.id !== action.payload),
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contacts;
