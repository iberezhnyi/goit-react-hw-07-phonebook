import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/contactsSlice';
import css from './ContactItem.module.css';

const ContactItem = ({ user: { name, number, id } }) => {
  const dispatch = useDispatch();

  const deleteUser = id => dispatch(deleteContact(id));

  return (
    <li className={css['contact-item']}>
      <p className={css['contact-text']}>
        {name}: {number}
      </p>
      <button
        className={css['btn-delete']}
        onClick={() => {
          deleteUser(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
