import { useState, useEffect } from 'react';
import './App.css';
import initialContacts from './assets/InitialContacts.json';
import Title from './components/Title/Title';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem('saved-contacts'));
    return savedContacts !== null ? savedContacts : initialContacts;
  });
  const [inputValue, setInputValue] = useState('');
  const addContact = (newContact) => {
    setContacts((previousContacts) => {
      return [...previousContacts, newContact];
    });
  };
  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);
  const updateContacts = () => {
    setContacts((previousContacts) => [...previousContacts, {}]);
  };
  const deleteContact = (contactId) => {
    setContacts((previousContacts) => {
      return previousContacts.filter((contact) => contact.id !== contactId);
    });
  };
  const displayedContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(inputValue.toLowerCase()));

  return (
    <div className="wrap">
      <Title />
      <ContactForm addContact={addContact} />
      <SearchBox value={inputValue} onSearchBoxChange={setInputValue} />
      <ContactList contacts={displayedContacts} updateContacts={updateContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
