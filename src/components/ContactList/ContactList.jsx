import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.ContactListBox}>
      {contacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
        // return <Contact key={contact.id} name={contact.name} number={contact.number} />;
      })}
    </ul>
  );
};

export default ContactList;
