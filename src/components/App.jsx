import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  Title,
  Form,
  Label,
  Property,
  Input,
  Submit,
} from './Phonebook.styled';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = e => {
    e.preventDefault();
    const nameContact = this.state.name;
    const newContact = {
      id: nanoid(),
      name: nameContact,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
    }));
  };

  render() {
    return (
      <>
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContact}>
          <Label>
            <Property>Name</Property>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleNameChange}
            ></Input>
          </Label>
          <Submit type="submit">Add contact</Submit>
        </Form>
      </>
    );
  }
}

export default App;
