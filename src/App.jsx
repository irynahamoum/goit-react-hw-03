import { useState } from 'react';
import './App.css';
import Title from './components/Title/Title';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(() => {
    const contacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'John Smith', number: '459-12-58' },
      { id: 'id-6', name: 'Steve Kline', number: '443-20-16' },
      { id: 'id-7', name: 'Dave Bailey', number: '645-14-79' },
      { id: 'id-8', name: 'Marta Darsey', number: '227-98-78' },
      { id: 'id-9', name: 'Olya Iceland', number: '227-49-31' },
    ];
    return contacts;
  });
  const [inputValue, setInputValue] = useState('');
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
    console.log(inputValue);
  };

  const updateContacts = () => {
    setContacts((prevContacts) => [...prevContacts, { id: 'new-id', name: 'New Contact', number: '123-45-67' }]);
  };

  return (
    <div className="wrap">
      <Title />
      <ContactForm />
      <SearchBox handleChange={handleChange} />
      <ContactList contacts={contacts} updateContacts={updateContacts} />
    </div>
  );
}

export default App;
