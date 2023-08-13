import { StyledTitle } from 'components/PhoneBook/PhoneBook.styled';


export const Contacts = ({ array, filter, onChangeFilter }) => {
  return (
    <>
      <StyledTitle>Contacts</StyledTitle>
      <h3>Find contacts by name:</h3>
      <input type="text" value={filter} onChange={e => onChangeFilter(e.target.value)}/>
      <ul>
        {array.map(el => (
          <li>{el.name}: {el.number}</li>
        ))}
      </ul>
    </>
  );
};
