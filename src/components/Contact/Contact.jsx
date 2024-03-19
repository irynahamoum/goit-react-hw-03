import ButtonTemplate from '../Button/Button';
import css from './Contact.module.css';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineLocalPhone } from 'react-icons/md';

const Contact = ({ contact: { id, name, number, category }, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li className={css.contactCard} key={id}>
      <p className={css.p}>
        <span className={css.span}>
          <AiOutlineUser size={18} color={'#26b6f9'} />
        </span>
        {name}
      </p>
      <p className={css.category}>{category}</p>
      <p className={css.p}>
        <span className={css.span}>
          <MdOutlineLocalPhone size={18} color={'#26b6f9'} />
        </span>
        {number}
      </p>
      <ButtonTemplate btnTitle={'Delete 🗑️'} handleDelete={handleDelete} />
    </li>
  );
};

export default Contact;
