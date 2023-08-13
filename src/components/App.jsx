import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { StyledTitle } from './PhoneBook/PhoneBook.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addName = newName => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newName],
      };
    });
  };

  changeFilter = newValue => {
    this.setState({
      filter: newValue,
    });
    // console.log(newValue)
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleNames = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
    return (
      <>
        <StyledTitle>Phonebook</StyledTitle>
        <PhoneBook onAdd={this.addName} />
        <StyledTitle>Contacts</StyledTitle>
        <Filter filter={filter} onChangeFilter={this.changeFilter} />
        <Contacts array={visibleNames} />
      </>
    );
  }
}
