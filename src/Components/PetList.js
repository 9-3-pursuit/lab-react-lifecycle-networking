export const PetList = (props) => {
  let petList = props.pets.map((pet) => pet.name);
  return (
    <aside className="pets-list">
      {petList.length == 0 ? (
        <p>No pets listed for this employee.</p>
      ) : (
        <p>{petList.toString()}</p>
      )}
    </aside>
  );
};

export default PetList;
