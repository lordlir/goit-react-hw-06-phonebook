import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { ContactListItem } from 'components/contact-list-item/ContactListItem';

export const ContactList = () => {
  const onFilteredContacts = (filter, contacts) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filterContacts = onFilteredContacts(filter, contacts);

  return (
    <ul className="list">
      {filterContacts.map(contact => {
        return <ContactListItem key={contact.id} {...contact} />;
      })}
    </ul>
  );
};
