import css from './SearchBox.module.css';
import { useId } from 'react';

const SearchBox = ({ value, handleChange }) => {
  const searchInput = useId();
  return (
    <div className={css.searchContainer}>
      <label className={css.label} htmlFor={searchInput}>
        Find contacts by name:
      </label>
      <input
        id={searchInput}
        className={css.searchInput}
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Search..."
      />
    </div>
  );
};
export default SearchBox;
