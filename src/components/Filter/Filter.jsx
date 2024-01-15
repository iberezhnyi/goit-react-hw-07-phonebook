import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'store/filter/filterSlice';
import { selectFilter } from 'store/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const searchUser = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  const filterValue = useSelector(selectFilter);

  return (
    <label>
      <p className={css['filter-text']}>Find contacts by name</p>
      <input
        className={css['filter-input']}
        onChange={searchUser}
        value={filterValue}
        type="text"
      />
    </label>
  );
};

export default Filter;
