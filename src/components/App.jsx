import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { PhoneBook } from './PhoneBook/PhoneBook';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
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
    })
    // console.log(newValue)
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleNames = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLocaleLowerCase()))
    return (
      <>
        <PhoneBook onAdd={this.addName} />
        <Contacts array={visibleNames} filter={filter} onChangeFilter={this.changeFilter}/>
      </>
    );
  }
}
