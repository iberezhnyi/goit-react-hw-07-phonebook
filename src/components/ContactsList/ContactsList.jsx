import { useSelector } from 'react-redux';
import { getContacts } from 'store/contactsSlice';
import { getFilter } from 'store/filterSlice';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactsList = () => {
  const contacts = useSelector(getContacts);

  const filterValue = useSelector(getFilter);

  const getFilteredUsers = () => {
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredUsers = getFilteredUsers();

  return (
    <ul>
      {filteredUsers.map(el => (
        <ContactItem user={el} key={el.id} />
      ))}
    </ul>
  );
};

export default ContactsList;
