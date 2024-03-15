import ButtonTemplate from '../Button/Button';
import css from './Contact.module.css';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineLocalPhone } from 'react-icons/md';

const Contact = ({ contact }) => {
  return (
    <li className={css.contactCard} key={contact.id}>
      <p>
        <span className={css.span}>
          <AiOutlineUser size={18} color={'#26b6f9'} />
        </span>

        {contact.name}
      </p>
      <p>
        <span className={css.span}>
          <MdOutlineLocalPhone size={18} color={'#26b6f9'} />
        </span>
        {contact.number}
      </p>
      <ButtonTemplate btnTitle={'Delete 🗑️'} />
    </li>
  );
};

export default Contact;
