import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import * as contactsThunks from 'store/contacts/contactsThunks';
import { selectContacts } from 'store/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    const isDuplicated = items.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicated) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { name, phone };

    dispatch(contactsThunks.addContact(newContact));

    form.reset();
  };

  return (
    <form className={css['contact-form']} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={css['contact-form-input']}
          type="text"
          name="name"
          required
        />
      </label>

      <label>
        Number
        <input
          className={css['contact-form-input']}
          type="tel"
          name="phone"
          required
        />
      </label>

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
