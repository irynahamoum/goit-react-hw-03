import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.ContactListBox}>
      {contacts.map((contact) => {
        return <Contact key={contact.id} onDelete={onDelete} contact={contact} />;
      })}
    </ul>
  );
};

export default ContactList;
