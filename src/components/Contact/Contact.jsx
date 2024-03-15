import ButtonTemplate from '../Button/Button';
import css from './Contact.module.css';
const Contact = ({ contact }) => {
  return (
    <li className={css.contactCard} key={contact.id}>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <ButtonTemplate btnTitle={'Delete 🗑️'} />
    </li>
  );
};

export default Contact;
