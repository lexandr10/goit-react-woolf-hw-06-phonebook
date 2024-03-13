import { useDispatch, useSelector } from 'react-redux';
import css from './list.module.css';
import { getContact, getFilter } from 'store/selectors/selectors';
import { deleteContact } from 'store/contactsSlice/contactsSlice';

const ListContact = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);
  const distpatch = useDispatch();
  const onFilter = evt => {
    if (!filter) {
      return contacts;
    } else {
      return contacts.filter(
        user =>
          user.name.includes(filter) || user.name.toLowerCase().includes(filter)
      );
    }
  };
  const onDelete = id => {
    distpatch(deleteContact(id));
  };

  return (
    <ul className={css.items}>
      {onFilter().length > 0 &&
        onFilter().map(({ id, name, number }) => (
          <li className={css.list} key={id}>
            <div>
              <p className={css.text}>Name: {name}</p>
              <p className={css.text}>Number: {number}</p>
            </div>

            <button
              className={css.btn}
              id={id}
              onClick={() => onDelete(id)}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ListContact;
