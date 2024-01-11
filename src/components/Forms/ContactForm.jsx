import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'store/contactsSlice';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isDuplicated = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicated) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact(name, number));

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
          name="number"
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
