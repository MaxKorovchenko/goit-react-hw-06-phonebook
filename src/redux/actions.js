import { nanoid } from 'nanoid';

export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: {
      name,
      number,
      id: nanoid(),
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const filterContacts = value => {
  return {
    type: 'filter/filterContacts',
    payload: value,
  };
};
