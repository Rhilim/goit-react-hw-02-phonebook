export const Filter = ({ filter, onChangeFilter }) => {
    return (
      <>
        <h3>Find contacts by name:</h3>
        <input type="text" value={filter} onChange={e => onChangeFilter(e.target.value)}/>
      </>
    );
  };
  