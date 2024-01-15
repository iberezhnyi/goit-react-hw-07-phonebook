import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsThunks from 'store/contacts/contactsThunks';
import { selectVisibleContacts } from 'store/selectors';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactsList = () => {
  const dispatch = useDispatch();

  const filteredUsers = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(contactsThunks.fetchContacts());
  }, [dispatch]);

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
