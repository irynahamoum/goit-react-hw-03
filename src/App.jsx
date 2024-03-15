import './App.css';
import { useState } from 'react';
import Title from './components/Title/Title';
import ButtonTemplate from './components/Button/Button';
import { SearchOutlined } from '@ant-design/icons';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState(() => {
    const contacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    return contacts;
  });

  const updateContacts = () => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: 'new-id', name: 'New Contact', number: '123-45-67' }, // Adjust data accordingly
    ]);
  };

  return (
    <div className="wrap">
      <div className="panel">
        <Title />
        <ButtonTemplate btnTitle={'Add contact'} />
        <ButtonTemplate btnTitle={'Search'} icon={<SearchOutlined />} />
      </div>
      <ContactList contacts={contacts} updateContacts={updateContacts} />
    </div>
  );
}

export default App;
