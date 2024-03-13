import { useDispatch, useSelector } from 'react-redux';
import css from './filter.module.css';
import { resultFilter } from 'store/filterSlice/filterSlice';
import { getFilter } from 'store/selectors/selectors';
const Filter = () => {
  const { filter } = useSelector(getFilter);
  const distpatch = useDispatch();
  const filterChange = evt => {
    distpatch(resultFilter(evt.target.value));
  };

  return (
    <div>
      <h2 className={css.title}>Contacts</h2>
      <div className={css.divInput}>
        <label className={css.label} htmlFor="231">
          Find contacts by name
        </label>
        <input
          onChange={filterChange}
          id="231"
          type="text"
          name="filter"
          value={filter}
          className={css.input}
        />
      </div>
    </div>
  );
};
export default Filter;
