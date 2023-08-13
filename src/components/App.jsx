import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { PhoneBook } from './PhoneBook/PhoneBook';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addName = newName => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newName],
      };
    });
  };

  render() {

    return (
      <>
        <PhoneBook onAdd={this.addName} />
        <Contacts array={this.state.contacts}/>
      </>
    );
  }
}
