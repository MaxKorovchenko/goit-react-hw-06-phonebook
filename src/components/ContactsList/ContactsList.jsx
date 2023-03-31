import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    if (!filter) return contacts;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <ContactItem id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    </>
  );
};
