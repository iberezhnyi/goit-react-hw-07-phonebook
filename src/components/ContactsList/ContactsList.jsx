import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsThunks from 'store/contacts/contactsThunks';
import { selectContacts, selectFilter } from 'store/selectors';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactsList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  useEffect(() => {
    dispatch(contactsThunks.fetchContacts());
  }, [dispatch]);

  const getFilteredUsers = () => {
    const normalizedFilter = filterValue.toLowerCase();

    return items.filter(el => {
      return el.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const filteredUsers = getFilteredUsers();

  return (
    <>
      <ul>
        {filteredUsers.map(el => (
          <ContactItem user={el} key={el.id} />
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
