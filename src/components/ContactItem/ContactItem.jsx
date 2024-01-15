import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import { deleteContact } from 'store/contacts/contactsThunks';

const ContactItem = ({ user: { name, phone, id } }) => {
  const dispatch = useDispatch();

  return (
    <li className={css['contact-item']}>
      <p className={css['contact-text']}>
        {name}: {phone}
      </p>
      <button
        type="button"
        className={css['btn-delete']}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
