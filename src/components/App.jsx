import React, { Component } from 'react';
import ContactsList from './contactsList/ContactsList';
import ContactForm from './Form/Form';
import Filter from './Filter/Filter';
import { Title, ContactsListTitle } from './Phonebook.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  searchByName = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  addContact = newContact => {
    // const { contacts } = this.state;
    // contacts.forEach(({ name }) => {
    //   if (name === newContact.name) {
    //     alert(`${name} is already in contacts`);
    //     return;
    //   }
    // });
    // console.log(contacts);
    this.setState(prevState => {
      let isContains = false;
      let updateContacts = [];
      prevState.contacts.forEach(({ name }) => {
        if (name === newContact.name) {
          alert(`${name} is already in contacts`);
          isContains = true;
        }
      });
      isContains
        ? (updateContacts = [...prevState.contacts])
        : (updateContacts = [...prevState.contacts, newContact]);
      return {
        contacts: updateContacts,
        name: '',
        number: '',
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact} />
        <ContactsListTitle>Contacts</ContactsListTitle>
        <Filter searchByName={this.searchByName} />
        <ContactsList phoneList={visibleContacts} />
      </>
    );
  }
}

export default App;
