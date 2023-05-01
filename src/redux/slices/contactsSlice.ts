import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let nextId = 1; // Initialize the ID counter

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    // Action to add a new contact to the contacts list
    addContact: (state, action: PayloadAction<Omit<Contact, "id">>) => {
      // Create a new contact object by copying the payload and adding an ID
      const newContact = { ...action.payload, id: nextId++ };
      // Add the new contact to the list of contacts in the Redux store
      state.contacts.push(newContact);
    },

    // Action to update an existing contact in the contacts list
    updateContact: (state, action: PayloadAction<Contact>) => {
      // Find the index of the contact with the given ID
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      // If the contact is found, update its properties
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },

    // Action to delete a contact from the contacts list
    deleteContact: (state, action: PayloadAction<number>) => {
      // Filter the contacts list to remove the contact with the given ID
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Export the action creators for the Redux actions
export const { addContact, updateContact, deleteContact } =
  contactsSlice.actions;

// Export the reducer for the Redux store
export default contactsSlice.reducer;
