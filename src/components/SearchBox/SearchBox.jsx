import ButtonTemplate from '../Button/Button';
import { SearchOutlined } from '@ant-design/icons';
import css from './SearchBox.module.css';

const SearchBox = ({ handleChange }) => {
  return (
    <div className={css.searchContainer}>
      <input className={css.searchInput} type="text" onChange={handleChange} placeholder="Search..." />
      <ButtonTemplate btnTitle={'Search'} icon={<SearchOutlined />} />
    </div>
  );
};
export default SearchBox;
