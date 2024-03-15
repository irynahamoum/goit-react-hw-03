import ButtonTemplate from '../Button/Button';
import { SearchOutlined } from '@ant-design/icons';

const SearchBox = () => {
  return (
    <>
      <ButtonTemplate btnTitle={'Search'} icon={<SearchOutlined />} />
    </>
  );
};
export default SearchBox;
