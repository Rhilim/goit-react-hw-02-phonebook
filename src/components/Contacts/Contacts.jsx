import { StyledTitle } from 'components/PhoneBook/PhoneBook.styled';


export const Contacts = ({ array }) => {
  return (
    <>
      <StyledTitle>Contacts</StyledTitle>
      <ul>
        {array.map(el => (
          <li>{el.name}: {el.number}</li>
        ))}
      </ul>
    </>
  );
};
