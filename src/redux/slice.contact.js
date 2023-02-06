import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const contactsArr = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: { data: contactsArr },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.data.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: uuidv4(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.data.findIndex(
        contact => contact.id === action.payload
      );
      state.data.splice(index, 1);
    },
  },
});
export const { addContact, deleteContact } = ContactsSlice.actions;
export const ContactsReducer = ContactsSlice.reducer;
