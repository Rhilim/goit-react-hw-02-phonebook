export const Contacts = ({ array, onDelete }) => {
    console.log(array)
  return (
    <>
      <h3>Find contacts by name:</h3>

      <ul>
        {array.map((el, index) => (
          <li key={index}>
            {el.name}: {el.number}
            <button onClick={() => onDelete(el.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
