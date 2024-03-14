import css from './Title.module.css';
import { ImAddressBook } from 'react-icons/im';

const Title = ({ title, image }) => {
  return (
    <div className={css.titleWrap}>
      <ImAddressBook size={40} color={'#26b6f9'} />
      <h1 className={css.title}>Phonebook</h1>
    </div>
  );
};

export default Title;
