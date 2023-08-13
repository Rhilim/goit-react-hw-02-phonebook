export const Contacts = ({ array }) => {
  return (
    <>
      <h3>Find contacts by name:</h3>

      <ul>
        {array.map(el => (
          <li>
            {el.name}: {el.number}
          </li>
        ))}
      </ul>
    </>
  );
};
