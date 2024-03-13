import { useState } from 'react';
import css from './form.module.css';
import { nanoid } from 'nanoid';
import { getContact } from 'store/selectors/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from 'store/contactsSlice/contactsSlice';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContact);
  const distpatch = useDispatch();
  const handlerChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handlerSubmit = evt => {
    evt.preventDefault();
    const data = { id: nanoid(), name: name, number: number };
    setName('');
    setNumber('');
    const result = contacts.find(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );
    if (!result) {
      const contact = {
        id: nanoid(),
        name: data.name,
        number: data.number,
      };
      distpatch(createContact(contact));
    } else {
      return alert(`${data.name} is already in contacts`);
    }
  };
  return (
    <div className="">
      <h1 className={css.title}>Phonebook</h1>
      <form className={css.form} onSubmit={handlerSubmit}>
        <div className={css.blockImputs}>
          <div className={css.divInput}>
            <label className={css.label} htmlFor="222">
              Name
            </label>
            <input
              className={css.input}
              type="text"
              name="name"
              id="222"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handlerChange}
            />
          </div>
          <div className={css.divInput}>
            {' '}
            <label className={css.label} htmlFor="223">
              Number
            </label>
            <input
              className={css.input}
              id="223"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handlerChange}
            />
          </div>
        </div>

        <button className={css.buttonx} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
export default Form;
